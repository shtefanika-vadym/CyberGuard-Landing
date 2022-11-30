<script>
  import chart_y from '../../assets/chart_y.svg'
  import chart_m from '../../assets/chart_m.svg'

  export let number
  export let title
  export let color
</script>

<div class="screenChart">
  <div class="chartWrapper">
    <p class="chartNumber">{number}</p>
    <p class="chartTitle">{title}</p>
  </div>
  <img src={color === 'purple' ? chart_m : chart_y} alt="" />
</div>

<style lang="scss">
  .screenChart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .chartNumber {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #e8e8fc;
  }
  .chartTitle {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #e8e8fc;
  }
</style>
