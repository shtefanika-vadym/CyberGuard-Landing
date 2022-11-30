<script>
  import { Progress } from '@svelteuidev/core'
  export let progressData
  export let progressColor
</script>

<div>
  <div class="dashboardProgress">
    <p class="dashboardProgressText">{progressData.website}</p>
    <p class="dashboardProgressText position red">{progressData.fake}</p>
    <p class="dashboardProgressText position green">{progressData.real}</p>
    <p class="dashboardProgressText position">{progressData.procent}%</p>
  </div>
  <Progress size="sm" color={progressColor} value={progressData.procent} />
</div>

<style lang="scss">
  .dashboardProgressText {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    color: #e8e8fc;
  }

  .position {
    justify-self: end;
  }

  .red {
    color: #ef4444;
  }

  .green {
    color: #10b981;
  }

  .dashboardProgress {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
</style>
