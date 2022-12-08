<script lang="ts">
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table'
  import chevronUpActive from '../../assets/icons/chevron-up-active.svg'
  import chevronDownActive from '../../assets/icons/chevron-down-active.svg'
  import deleteIcon from '../../assets/icons/delete.svg'
  import { onMount } from 'svelte'
  import { MainAPI } from '../../api/api'
  import { Jumper } from 'svelte-loading-spinners'

  let items = []
  let status = ''
  let sort = 'id'
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending'

  onMount(async () => {
    try {
      status = 'loading'
      const res = await MainAPI.getBlacklist()
      items = res.data
      status = 'succeeded'
    } catch (error) {
      console.log(error)
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
      <Cell columnId="website">
        <Label>WEBSITE</Label>
        <img src={sortDirection === 'ascending' ? chevronUpActive : chevronDownActive} alt="" />
      </Cell>
      <Cell columnId="label" style="width: 100%">
        <Label>LABEL</Label>
        <!-- For non-numeric columns, icon comes second. -->
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
        <Row class="test">
          <Cell class="test"><p class="tableWebsite">{item.url}</p></Cell>
          <Cell><p class="tableLabel">{item.label}</p></Cell>
          <Cell><button class="tableActions"><img src={deleteIcon} alt="" /></button></Cell>
        </Row>
      {/each}
    {:else}
      <p>Something went wrong please try again</p>
    {/if}
  </Body>
</DataTable>

<style lang="scss">
  .tableWebsite {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }

  .tableActions {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  .loadingStyle {
    position: absolute;
    left: 50%;
  }

  .tableLabel {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }
</style>
