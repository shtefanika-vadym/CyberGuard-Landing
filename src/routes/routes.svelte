<script>
  import { Router, Route } from 'svelte-routing'

  import Home from '../features/home/home.svelte'
  import Redirect from '../routes/redirect.svelte'
  import { PATH } from '../routes/path'
  import DashboardNavigation from '../features/dashboard/components/dashboard-navigation/dashboard-navigation.svelte'

  export let url = ''
</script>

<Router {url}>
  <Route path={PATH.HOME} component={Home} />
  <Route path={PATH.DASHBOARD} component={DashboardNavigation} />
  <Route path="*" component={Redirect} />
</Router>
