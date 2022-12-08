<script>
  import { Progress } from '@svelteuidev/core'
  export let progressData
  export let progressColor
</script>

<div>
  <div class="dashboardProgress">
    <p class="dashboardProgressText">{progressData?.website || 0}</p>
    <p class="dashboardProgressText position red">{progressData?.fakeNews || 0}</p>
    <p class="dashboardProgressText position green">{progressData?.realNews || 0}</p>
    <p class="dashboardProgressText position">{Math.floor(progressData?.percentage) || 0}%</p>
  </div>
  <Progress size="sm" color={progressColor} value={Math.floor(progressData?.percentage)} />
</div>

<style lang="scss">
  .dashboardProgressText {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    color: var(--color-white--second);
  }

  .position {
    justify-self: end;
  }

  .red {
    color: var(--color-error);
  }

  .green {
    color: var(--color--success);
  }

  .dashboardProgress {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
</style>
