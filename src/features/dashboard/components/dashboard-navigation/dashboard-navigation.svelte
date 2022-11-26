<script lang="ts">
  import {
    DASHBOARD_NAVIGATION_PATH,
    DASHBOARD_NAVIGATION_ALT,
    DASHBOARD_NAVIGATION,
  } from '../../constatns/dashboard-constants'
  import logo from '../../assets/logo.png'

  import { navigate } from 'svelte-routing'

  import { onMount } from 'svelte'

  let activeRoute = 'home'

  onMount(() => (activeRoute = window.location.href))

  const handleChangeDashboardNavigation = (elements: string) => {
    navigate(`/dashboard/${elements}`)
    activeRoute = elements
  }

  const getCurrentAccountComponent = (route: string) => {
    switch (route) {
      case DASHBOARD_NAVIGATION_PATH.HOME:
        return 'home'
      case DASHBOARD_NAVIGATION_PATH.HISTORY:
        return 'history'
      case DASHBOARD_NAVIGATION_PATH.MALICIOUS:
        return 'malicious'
      default:
        return 'dashboard'
    }
  }
</script>

<div lang="ts" class="dashboardNavigation">
  <div class="dashboardNavigationWrapper">
    <div class="dashboardNavigationLogo">
      <img src={logo} alt={DASHBOARD_NAVIGATION_ALT.LOGO} />
    </div>
    {#each DASHBOARD_NAVIGATION as ELEMENT}
      <div
        class="dashboardNavigationItem"
        on:click={() => handleChangeDashboardNavigation(ELEMENT.ROUTE)}>
        <img
          src={activeRoute === ELEMENT.ROUTE ? ELEMENT.ICON_ACTIVE : ELEMENT.ICON_INACTIVE}
          alt={DASHBOARD_NAVIGATION_ALT.NAVIGATION_ICON} />
        <p
          class={activeRoute === ELEMENT.ROUTE
            ? 'dashboardNavigationActive'
            : 'dashboardNavigationText'}>
          {ELEMENT.TITLE}
        </p>
      </div>{/each}
  </div>
  <div class="dashboardNavigationChild">{getCurrentAccountComponent(activeRoute)}</div>
</div>

<style lang="scss">
  .dashboardNavigation {
    display: flex;
  }

  .dashboardNavigationWrapper {
    height: 100vh;
    width: 330px;
    background-color: var(--dark-200);
  }

  .dashboardNavigationChild {
    flex: 5;
  }

  .dashboardNavigationLogo {
    padding: 50px 0 60px 34px;
  }

  .dashboardNavigationText {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: var(--gray-100);
  }

  .dashboardNavigationActive {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: var(--color-white);
  }

  .dashboardNavigationItem {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 28px 0 0 34px;
    cursor: pointer;
  }
</style>
