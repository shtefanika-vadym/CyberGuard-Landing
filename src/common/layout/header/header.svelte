<script lang="ts">
  import { navigate } from "svelte-routing"

  import logo from '../../assets/icons/logo.png'
  import { ALT_IMG, NAVIGATION_LIST } from '../../constants/constants'
  import { onMount } from 'svelte'

  let activeRoute: string = ''

  const handleNavigate = (route: string): void => {
    navigate(route)
    activeRoute = route
  }

  onMount(() => activeRoute = window.location.pathname.split('/')[1])

</script>

<header class="content header">
  <img class="logo" src={logo} alt={ALT_IMG.LOGO_ICON}>
  <nav class="navigationList">
    {#each NAVIGATION_LIST as route}
      <button
        class={"routeItem"}
        class:activeRoute={activeRoute === route.to}
        on:click={() =>handleNavigate(route.to)}>{route.title}
      </button>
    {/each}
  </nav>
  <span class="profile">Profile</span>
</header>

<style lang="scss">
  @import "src/common/style/responsive";

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptive-value('column-gap', 50, 10, 0);
    @include adaptive-value('padding-top', 40, 10, 0);
  }

  .routeItem, .profile {
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    color: var(--color-white);
    @include adaptive-value('font-size', 16, 5, 0);
    cursor: pointer;
    border: none;
    @include adaptive-value('padding-bottom', 6, 1, 0);
    background-color: transparent;
  }

  .activeRoute {
    border-bottom: 1px solid var(--color-white);
  }

  .profile {
    line-height: 120%;
  }

  .navigationList {
    display: flex;
    align-items: center;
    column-gap: 50px;
    @include adaptive-value('column-gap', 50, 10, 0);
  }

  .logo {
    @include adaptive-value('width', 144, 70, 0);
  }
</style>
