<script>
  import { Progress } from '@svelteuidev/core'
  import { DASHBOARD_CUSTOMER } from '../../constatns/dashboard-mockdata'
</script>

<div class="dashboardCustomer">
  {#each DASHBOARD_CUSTOMER as element}
    <div>
      <div class="dashboardCustomerProgress">
        <p>{element.satisfaction}</p>
        <p>{element.score}%</p>
      </div>
      <Progress size="sm" color={element.color} value={element.score} />
    </div>
  {/each}
</div>

<style lang="scss">
  .dashboardCustomer {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 8px 20px;
  }

  .dashboardCustomerProgress {
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    color: #e8e8fc;
  }
</style>
