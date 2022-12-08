<script>
  import { Router, Route } from 'svelte-routing'

  import { PATH } from '../routes/path'
  import Home from '../features/home/home.svelte'
  import Login from '../features/auth/components/login/login.svelte'
  import Register from '../features/auth/components/register/register.svelte'
  import Redirect from '../routes/redirect.svelte'
  import DashboardNavigation from '../features/dashboard/components/dashboard-navigation/dashboard-navigation.svelte'
  import Profile from '../features/profile/profile.svelte'

  export let url = ''
</script>

<Router {url}>
  <Route path={PATH.HOME} component={Home} />
  <Route path={PATH.LOGIN} component={Login} />
  <Route path={PATH.REGISTER} component={Register} />
  <Route path={PATH.DASHBOARD} component={DashboardNavigation} />
  <Route path={PATH.PROFILE} component={Profile} />
  <Route path="*" component={Redirect} />
</Router>
