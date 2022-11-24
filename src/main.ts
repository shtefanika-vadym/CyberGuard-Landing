import App from './App.svelte'
// import {AuthService} from "../src/common/services/auth-service";

// const app = () => new App({
//   target: document.getElementById('app')
// })
//
// AuthService.initKeycloak(app)

const app = new App({
  target: document.getElementById('app'),
})

export default app
