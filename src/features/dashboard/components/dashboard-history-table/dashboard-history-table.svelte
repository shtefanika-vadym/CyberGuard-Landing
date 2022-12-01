<script>
  import Search from '../../../../common/components/search/search.svelte'
  import HistoryTable from '../../../../common/components/history-table/history-table.svelte'
</script>

<div class="dashboardHistoryTable">
  <h1 class="dashboardHistoryTitle">Tasks History</h1>
  <div class="dashboardHistorySearch">
    <Search />
  </div>
  <HistoryTable />
</div>

<style lang="scss">
  .dashboardHistoryTable {
    margin: 0 20px 0 20px;
    max-width: 1300px;
  }

  .dashboardHistoryTitle {
    margin: 50px 0 20px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #e8e8fc;
  }

  .dashboardHistorySearch {
    display: flex;
    justify-content: end;
    padding: 0 0 20px 0;
  }
</style>
