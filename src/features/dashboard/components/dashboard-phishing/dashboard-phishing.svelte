<script>
  import Search from '../../../../common/components/search/search.svelte'
  import PhishingTable from '../../../../common/components/phishing-table/phishing-table.svelte'
</script>

<div class="dashboardPhishing">
  <h1 class="dashboardPhishingTitle">Phishing</h1>
  <div class="dashboardPhishingSearch">
    <Search />
  </div>
  <PhishingTable />
</div>

<style lang="scss">
  .dashboardPhishing {
    margin: 0 20px 0 20px;
    max-width: 1300px;
  }

  .dashboardPhishingTitle {
    margin: 50px 0 20px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #e8e8fc;
  }

  .dashboardPhishingSearch {
    display: flex;
    justify-content: end;
    padding: 0 0 20px 0;
  }
</style>
