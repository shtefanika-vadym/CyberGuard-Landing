import App from './app.svelte'

import './common/style/index.scss'
import './common/style/variables.css'
import './common/style/responsive.scss'

import { AuthService } from './common/services/auth-service'

const app = () =>
  new App({
    target: document.getElementById('app'),
    hydrate: false,
  })

AuthService.initKeycloak(app)
