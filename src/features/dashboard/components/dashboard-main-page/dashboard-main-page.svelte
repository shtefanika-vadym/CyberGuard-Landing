<script>
  import { onMount } from 'svelte'
  import { TaskManagerAPI } from '../../services/dashboard-call-api'
  import DashboardCustomer from '../dashboard-customer/dashboard-customer.svelte'
  import DashboardDonuteChart from '../dashboard-donute-chart/dashboard-donute-chart.svelte'
  import DashboardLargeChart from '../dashboard-large-chart/dashboard-large-chart.svelte'
  import DashboardMiniChart from '../dashboard-mini-chart/dashboard-mini-chart.svelte'
  import DashboardWebsite from '../dashboard-website/dashboard-website.svelte'

  let dashbordData
  let trustedSite
  let vulnerableSite
  let analysesSummary

  onMount(async () => {
    const res = await TaskManagerAPI.getStatistics()
    dashbordData = res.data
  })

  onMount(async () => {
    const res = await TaskManagerAPI.getTrustedSite()
    trustedSite = res.data
  })

  onMount(async () => {
    const res = await TaskManagerAPI.getVulnerableSite()
    vulnerableSite = res.data
  })

  onMount(async () => {
    const res = await TaskManagerAPI.getAnalysesSummary()
    analysesSummary = res.data
  })
</script>

<div>
  <h1 class="screenTitle">Dashboard</h1>
  <div class="screenGrid">
    <div class="g1">
      <DashboardMiniChart
        number={dashbordData?.downloads || 0}
        title={'Downloads'}
        color={'purple'} />
    </div>
    <div class="g2">
      <DashboardMiniChart number={dashbordData?.users || 0} title={'Users'} color={'yellow'} />
    </div>
    <div class="g3">
      <DashboardMiniChart
        number={dashbordData?.users || 0}
        title={'Subscribers'}
        color={'purple'} />
    </div>
    <div class="g4">
      <DashboardMiniChart
        number={dashbordData?.analyses || 0}
        title={'Analysis'}
        color={'yellow '} />
    </div>
    <div class="g5">
      <DashboardMiniChart
        number={dashbordData?.phishing || 0}
        title={'Phishing Attacks'}
        color={'purple'} />
    </div>
    <div class="g6">
      <DashboardWebsite
        dashboardWebsiteTitle="The Most Trusted Website"
        progressBarData={trustedSite}
        progressColor="#10B981" />
    </div>
    <div class="g7">
      <h1 class="dashboardWebsiteDonuteTitle">Users activity</h1>
      <DashboardLargeChart />
    </div>
    <div class="g8">
      <DashboardWebsite
        dashboardWebsiteTitle="The Most Vulnerable Website"
        progressBarData={vulnerableSite}
        progressColor="#EF4444" />
    </div>
    <div class="g9">
      <h1 class="dashboardWebsiteDonuteTitle">All analysis summary</h1>
      <div class="dashboardWebsiteDonute">
        <div class="dashboardWebsiteDonuteChart">
          <DashboardDonuteChart analyses={analysesSummary} />
        </div>
        <div class="dashboardWebsiteDonuteLegend">
          <p><span class="dashboardWebsiteDonuteLegendSpan main" />Real</p>
          <p><span class="dashboardWebsiteDonuteLegendSpan second" />Fake</p>
        </div>
      </div>
    </div>
    <div class="g10">
      <h1 class="dashboardWebsiteDonuteTitle">All analysis summary</h1>
      <div class="dashboardWebsiteDonute">
        <div class="dashboardWebsiteDonuteChart">
          <DashboardDonuteChart analyses={analysesSummary} />
        </div>
        <div class="dashboardWebsiteDonuteLegend">
          <p><span class="dashboardWebsiteDonuteLegendSpan main" />Real</p>
          <p><span class="dashboardWebsiteDonuteLegendSpan second" />Fake</p>
        </div>
      </div>
    </div>
    <div class="g11">
      <h1 class="dashboardWebsiteDonuteTitle">Customer Satisfaction</h1>
      <DashboardCustomer />
    </div>
  </div>
</div>

<style lang="scss">
  .screenTitle {
    margin: 50px 0 20px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: var(--color-white--second);
  }
  .screenGrid {
    max-width: 1300px;
    display: grid;
    grid-gap: 20px;
    margin: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1.1fr 2.2fr 2.2fr;
    grid-template-areas:
      'g1 g2 g3 g4 g5'
      'g6 g6 g7 g7 g7'
      'g8 g8 g9 g10 g11';
  }
  .g1 {
    grid-area: g1;
    background-color: var(--dark-200);
    border-radius: 15px;
    height: 105px;
  }
  .g2 {
    grid-area: g2;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g3 {
    grid-area: g3;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g4 {
    grid-area: g4;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g5 {
    grid-area: g5;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g6 {
    grid-area: g6;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g7 {
    grid-area: g7;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g8 {
    grid-area: g8;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g9 {
    grid-area: g9;
    background-color: var(--dark-200);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }
  .g10 {
    grid-area: g10;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .g11 {
    grid-area: g11;
    background-color: var(--dark-200);
    border-radius: 15px;
  }
  .dashboardWebsiteDonute {
    margin: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .dashboardWebsiteDonuteTitle {
    margin: 10px 0 0 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white--second);
  }

  .dashboardWebsiteDonuteLegend {
    display: flex;
    gap: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-white--second);
  }

  .dashboardWebsiteDonuteLegendSpan {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 7px 0 0;
  }

  .main {
    background-color: #3fd2d7;
  }

  .second {
    background-color: #636366;
  }

  .dashboardWebsiteDonuteChart {
    width: 124px;
    height: 124px;
  }
</style>
