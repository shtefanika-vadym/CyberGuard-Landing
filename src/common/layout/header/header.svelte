<script>
  import { Link } from "svelte-routing"

  import logo from '../../assets/icons/logo.png'
  import { ALT_IMG, NAVIGATION_LIST } from '../../constants/constants'
</script>

<header class="content header">
  <img class="logo" src={logo} alt={ALT_IMG.LOGO_ICON}>
  <nav class="navigationList">
    {#each NAVIGATION_LIST as route}
      <Link to={route.to}>{route.title}</Link>
    {/each}
  </nav>
  <span>Profile</span>
</header>

<style lang="scss">
  @import "src/common/style/responsive";

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptive-value('padding-top', 40, 10, 0);
  }

  .navigationList {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  .logo {
    @include adaptive-value('width', 144, 70, 0);
  }
</style>
