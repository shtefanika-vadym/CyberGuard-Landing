<script>
  import { Router, Route } from 'svelte-routing'

  import Home from '../features/home/home.svelte'
  import Dashboard from '../features/dashboard/dashboard.svelte'
  import Redirect from '../routes/redirect.svelte'
  import { PATH } from '../routes/path'

  export let url = '';
</script>

<Router {url}>
  <Route path={PATH.HOME} component={Home} />
  <Route path={PATH.DASHBOARD} component={Dashboard} />
  <Route path="*" component={Redirect} />
</Router>
