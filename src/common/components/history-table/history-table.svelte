<script lang="ts">
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table'
  import chevronUpActive from '../../assets/icons/chevron-up-active.svg'
  import chevronDownActive from '../../assets/icons/chevron-down-active.svg'
  import deleteIcon from '../../assets/icons/delete.svg'
  import { MainAPI } from '../../api/api'
  import { onMount } from 'svelte'
  import { Jumper } from 'svelte-loading-spinners'

  var rows = []

  let status = ''
  let error = ''
  let items = rows
  let sort = 'id'
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending'

  onMount(async () => {
    try {
      status = 'loading'
      const res = await MainAPI.getArticles()
      items = res.data
      status = 'succeeded'
    } catch (error) {
      error = error
    }
  })

  function handleSort() {
    items?.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][sortDirection === 'ascending' ? 'slice' : 'reverse']()
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return aVal.localeCompare(bVal)
      }
      return Number(aVal) - Number(bVal)
    })
    items = items
  }
</script>

<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:SMUIDataTable:sorted={handleSort}
  table$aria-label="User list"
  style="width: 100%;">
  <Head>
    <Row>
      <!--
        Note: whatever you supply to "columnId" is
        appended with "-status-label" and used as an ID
        for the hidden label that describes the sort
        status to screen readers.
        You can localize those labels with the
        "sortAscendingAriaLabel" and
        "sortDescendingAriaLabel" props on the DataTable.
      -->
      <Cell columnId="results">
        <Label>RESULTS</Label>
        <img src={sortDirection === 'ascending' ? chevronUpActive : chevronDownActive} alt="" />
      </Cell>
      <Cell columnId="name" style="width: 100%">
        <Label>ARTICLE TITLE</Label>
        <!-- For non-numeric columns, icon comes second. -->
        <img src={sortDirection === 'ascending' ? chevronUpActive : chevronDownActive} alt="" />
      </Cell>
      <Cell columnId="username">
        <Label>WEBSITE</Label>
        <img src={sortDirection === 'ascending' ? chevronUpActive : chevronDownActive} alt="" />
      </Cell>
      <!-- You can turn off sorting for a column. -->
      <Cell sortable={false}>ACTION</Cell>
    </Row>
  </Head>
  <Body>
    {#if status === 'loading'}
      <div class="loadingStyle">
        <Jumper size="60" color="#45EDF2" unit="px" duration="1s" />
      </div>
    {:else if status === 'succeeded'}
      {#each items as item (item.id)}
        <Row>
          <Cell>
            <div class={item.is_fake ? 'tableResults fake' : 'tableResults real'}>
              <p>{item.is_fake ? 'Fake' : 'Real'}</p>
              <p>{item.accuracy}% Confidence</p>
            </div></Cell>
          <Cell><p class="tableTitle">{item.title}</p></Cell>
          <Cell
            ><p class="tableWebsite" on:click={() => window.open(item.url, '_blank')}>
              {item.url}
            </p></Cell>

          <Cell><button class="tableActions"><img src={deleteIcon} alt="" /></button></Cell>
        </Row>
      {/each}
    {:else}
      <p>Something went wrong please try again</p>
    {/if}
  </Body>
</DataTable>

<style lang="scss">
  .tableResults {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    width: 130px;
  }

  .real {
    color: var(--color--success);
  }

  .fake {
    color: var(--color-error);
  }

  .loadingStyle {
    position: absolute;
    left: 50%;
  }

  .tableTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
    width: 350px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .tableWebsite {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--color-white--second);
    cursor: pointer;
  }

  .tableActions {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  .tableCategory {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }
</style>
