<script lang="ts">
  import {
    DASHBOARD_NAVIGATION_ALT,
    DASHBOARD_NAVIGATION,
  } from '../../constatns/dashboard-constants'
  import DashboardMainPage from '../dashboard-main-page/dashboard-main-page.svelte'
  import logo from '../../assets/logo.png'

  import { navigate } from 'svelte-routing'

  import { onMount } from 'svelte'
  import DashboardHistoryTable from '../dashboard-history-table/dashboard-history-table.svelte'
  import DashboardBlacklist from '../dashboard-blacklist/dashboard-blacklist.svelte'
  import DashboardPhishing from '../dashboard-phishing/dashboard-phishing.svelte'
  import DashboardMessagess from '../dashboard-messagess/dashboard-messagess.svelte'

  let activeRoute = 'home'

  onMount(() => (activeRoute = window.location.href))

  const handleChangeDashboardNavigation = (elements: string) => {
    activeRoute = elements
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
  <div class="dashboardNavigationChild">
    {#if activeRoute === 'home'}
      <DashboardMainPage />
    {:else if activeRoute === 'history'}
      <DashboardHistoryTable />
    {:else if activeRoute === 'blacklist'}
      <DashboardBlacklist />
    {:else if activeRoute === 'phishing'}
      <DashboardPhishing />
    {:else if activeRoute === 'messagess'}
      <DashboardMessagess />
    {:else}
      <DashboardMainPage />
    {/if}
  </div>
</div>

<style lang="scss">
  .dashboardNavigation {
    display: flex;
  }

  .dashboardNavigationWrapper {
    min-height: 100vh;
    width: 280px;
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
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    color: var(--gray-100);
  }

  .dashboardNavigationActive {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
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
