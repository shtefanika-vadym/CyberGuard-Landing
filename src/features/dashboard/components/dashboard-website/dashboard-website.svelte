<script>
  import { Progress } from '@svelteuidev/core'
  import DashboardProgressBar from '../dashboard-progress-bar/dashboard-progress-bar.svelte'
  export let progressBarData
  export let dashboardWebsiteTitle
  export let progressColor
</script>

<div class="dashboardWebsite">
  <h1 class="dashboardWebsiteTitle">{dashboardWebsiteTitle}</h1>
  <div class="dashboardWebsiteGrid">
    <p class="dashboardWebsiteCategory">WEBSITE</p>
    <p class="dashboardWebsiteCategory position">FAKE NEWS</p>
    <p class="dashboardWebsiteCategory position">REAL NEWS</p>
    <p class="dashboardWebsiteCategory position">PROCENT</p>
  </div>
  <div class="dashboardWebsiteProgresBar">
    {#if progressBarData}
      {#each progressBarData.slice(0, 4) as element}
        <DashboardProgressBar progressData={element} {progressColor} />
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .dashboardWebsite {
    display: flex;
    flex-direction: column;
    margin: 10px 15px;
  }

  .dashboardWebsiteTitle {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white--second);
  }

  .dashboardWebsiteCategory {
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    color: var(--color-white--second);
  }

  .position {
    justify-self: end;
  }

  .dashboardWebsiteGrid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    margin: 10px 0 0 0;
  }

  .dashboardWebsiteProgresBar {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
