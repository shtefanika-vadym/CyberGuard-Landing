<script lang="ts">
  import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table'
  import chevronUpActive from '../../assets/icons/chevron-up-active.svg'
  import chevronDownActive from '../../assets/icons/chevron-down-active.svg'
  import deleteIcon from '../../assets/icons/delete.svg'

  var rows = [
    {
      id: 1,
      results: 'Real',
      score: 82,
      title: 'China Using Civilian Ships to Enhance Na...',
      website: 'www.military.com',
      category: 'Military',
    },
    {
      id: 2,
      results: 'Fake',
      score: 98,
      title: 'China Using Civilian Ships to Enhance Na...',
      website: 'www.military.com',
      category: 'Military',
    },
    {
      id: 3,
      results: 'Fake',
      score: 87,
      title: 'China Using Civilian Ships to Enhance Na...',
      website: 'www.military.com',
      category: 'Military',
    },
    {
      id: 4,
      results: 'Real',
      score: 70,
      title: 'China Using Civilian Ships to Enhance Na...',
      website: 'www.military.com',
      category: 'Military',
    },
    {
      id: 5,
      results: 'Real',
      score: 81,
      title: 'China Using Civilian Ships to Enhance Na...',
      website: 'www.military.com',
      category: 'Military',
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
      <Cell columnId="email">
        <Label>CATEGORY</Label>
        <img src={sortDirection === 'ascending' ? chevronUpActive : chevronDownActive} alt="" />
      </Cell>
      <!-- You can turn off sorting for a column. -->
      <Cell sortable={false}>ACTION</Cell>
    </Row>
  </Head>
  <Body>
    {#each items as item (item.id)}
      <Row>
        <Cell>
          <div class={item.results === 'Real' ? 'tableResults real' : 'tableResults fake'}>
            <p>{item.results}</p>
            <p>{item.score}% Confidence</p>
          </div></Cell>
        <Cell><p class="tableTitle">{item.title}</p></Cell>
        <Cell><p class="tableWebsite">{item.website}</p></Cell>
        <Cell><p class="tableCategory">{item.category}</p></Cell>
        <Cell><button class="tableActions"><img src={deleteIcon} alt="" /></button></Cell>
      </Row>
    {/each}
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

  .tableTitle {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }

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

  .tableCategory {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-white--second);
  }
</style>
