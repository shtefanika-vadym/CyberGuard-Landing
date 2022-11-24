import { keycloakInstance } from '../../keycloak'

const initKeycloak = async (onAuthenticatedCallback: () => any) => {
  await keycloakInstance.init({
    onLoad: 'login-required',
    checkLoginIframe: false,
  })
  if (keycloakInstance.authenticated) onAuthenticatedCallback()
  else console.warn('User not logged')

  setInterval(() => keycloakInstance.updateToken(70), 6000)
}

const doLogin = keycloakInstance.login

const doLogout = keycloakInstance.logout

const getToken = (): string | undefined => keycloakInstance.token

const isLoggedIn = (): boolean => !!keycloakInstance.token

const getUserName = (): string => keycloakInstance.tokenParsed?.preferred_username
const getUserFullName = (): string => keycloakInstance.tokenParsed?.name
const getUserEmail = (): string => keycloakInstance.tokenParsed?.email
const getUserId = (): string => keycloakInstance.tokenParsed?.sub as string

const hasRole = (roles: any): boolean =>
  roles.some((role: any) => keycloakInstance.hasRealmRole(role))

export const AuthService = {
  doLogin,
  doLogout,
  getToken,
  hasRole,
  getUserName,
  initKeycloak,
  isLoggedIn,
  getUserFullName,
  getUserEmail,
  getUserId,
}
