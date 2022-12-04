import ky, { Options } from 'ky'

import { keycloakInstance } from '../../keycloak'

const initKeycloak = async () => {
  await keycloakInstance.init({
    checkLoginIframe: false,
    flow: 'implicit',
  })
  if (keycloakInstance.authenticated) {
    console.log('inside')
  } else console.log('User not logged')

  // setInterval(() => keycloakInstance.updateToken(70), 6000)
}

const doLogin = async (loginData: { username: string; password: string }) => {
  console.log(loginData)
  const response = await ky
    .post(
      `${import.meta.env.VITE_KEYCLOAK_URL}/realms/${
        import.meta.env.VITE_KEYCLOAK_REALM
      }/protocol/openid-connect/token`,
      {
        ...loginData,
        clientId: import.meta.env.VITE_KEYCLOAK_CLIENT as string,
        grant_type: 'password',
        client_secret: import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET as string,
      } as Options,
    )
    .json()
  console.log(response)
}

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
