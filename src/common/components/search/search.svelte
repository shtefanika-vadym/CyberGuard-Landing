<script>
  import searchIcon from '../../assets/icons/search.svg'
  export let searchValue = ''
</script>

<div class="search">
  <input
    value={searchValue}
    type="text"
    name=""
    id=""
    class="searchBar"
    placeholder="Search.."
    on:change={(e) => (searchValue = e.target.value)} />
  <img class="searchIcon" src={searchIcon} alt="" />
</div>

<style lang="scss">
  .search {
    display: flex;
    align-items: center;
    background-color: #1f2025;
    height: 40px;
    width: 250px;
    border-radius: 8px;
  }

  .searchBar {
    width: 100%;
    height: 100%;
    border: unset;
    background-color: unset;
    outline: none;
    padding: 0 0 0 8px;
    color: #e8e8fc;
  }

  .searchIcon {
    padding: 0 8px 0 8px;
  }

  ::placeholder {
    color: #a9a9a9;
  }
</style>
