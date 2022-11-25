import App from './app.svelte'
// import {AuthService} from "../src/common/services/auth-service";

import './common/style/index.scss'
import './common/style/variables.css'
import './common/style/responsive.scss'


// const app = () => new App({
//   target: document.getElementById('app')
// })
//
// AuthService.initKeycloak(app)

const app = new App({
  target: document.getElementById('app'),
  hydrate: false,
})

export default app
