<script lang="ts">
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table'
  import chevronUpActive from '../../assets/icons/chevron-up-active.svg'
  import chevronDownActive from '../../assets/icons/chevron-down-active.svg'
  import deleteIcon from '../../assets/icons/delete.svg'

  var rows = [
    {
      id: 1,
      website: 'www.military.com',
      label: 'Satire',
    },
    {
      id: 2,
      website: 'www.military.com',
      label: 'Satire',
    },
    {
      id: 3,
      website: 'www.military.com',
      label: 'Satire',
    },
  ]

  let items = rows
  let sort = 'id'
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending'
  // API CALL
  // if (typeof fetch !== 'undefined') {
  //   fetch(
  //     'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json',
  //   )
  //     .then((response) => response.json())
  //     .then((json) => (items = json))
  // }
  function handleSort() {
    items.sort((a, b) => {
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
    {#each items as item (item.id)}
      <Row class="test">
        <Cell class="test"><p class="tableWebsite">{item.website}</p></Cell>
        <Cell><p class="tableLabel">{item.label}</p></Cell>
        <Cell><button class="tableActions"><img src={deleteIcon} alt="" /></button></Cell>
      </Row>
    {/each}
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

  .tableLabel {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }
</style>
