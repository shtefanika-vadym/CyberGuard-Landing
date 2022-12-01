<script>
  import Search from '../../../../common/components/search/search.svelte'
  import BlacklistTable from '../../../../common/components/blacklist-table/blacklist-table.svelte'
  import addIcon from '../../../../common/assets/icons/add.svg'
</script>

<div class="dashboardBlacklistWrapper">
  <h1 class="dashboardBlacklist">Blacklist</h1>
  <div class="dashboardBlacklistSearch">
    <button class="dashboardBlacklistButton"
      ><span>Add new</span><img src={addIcon} alt="" /></button>
    <Search />
  </div>
  <BlacklistTable />
</div>

<style lang="scss">
  .dashboardBlacklistWrapper {
    margin: 0 20px 0 20px;
    max-width: 1300px;
  }

  .dashboardBlacklist {
    margin: 50px 0 20px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: var(--color-white--second);
  }
  .dashboardBlacklistSearch {
    display: flex;
    justify-content: end;
    padding: 0 0 20px 0;
    gap: 17px;
  }
  .dashboardBlacklistButton {
    width: 120px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
    background-color: #1f2025;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #a9a9a9;
  }
</style>
