<script>
  import { Router, Route } from 'svelte-routing'

  import Home from '../features/home/home.svelte'
  import Login from '../features/auth/login/login.svelte'
  import Register from '../features/auth/register/register.svelte'
  import Redirect from '../routes/redirect.svelte'
  import Header from '../common/layout/header/header.svelte'
  import { PATH } from '../routes/path'
  import DashboardNavigation from '../features/dashboard/components/dashboard-navigation/dashboard-navigation.svelte'

  export let url = ''
</script>

<Router {url}>
  <Header />
  <Route path={PATH.HOME} component={Home} />
  <Route path={PATH.LOGIN} component={Login} />
  <Route path={PATH.REGISTER} component={Register} />
  <Route path={PATH.DASHBOARD} component={DashboardNavigation} />
  <Route path="*" component={Redirect} />
</Router>
