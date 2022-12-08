import { PATH } from '../../routes/path'
import type { NavigationItem } from '../interfaces/navigation-item'

export enum ALT_IMG {
  LOGO_ICON = 'Logo Icon',
  ARROW_ICON = 'Arrow Icon',
  SCREEN_IMG = 'Screen Image',
  PROTECTION_ICON = 'Protection Icon',
  LOCATION_ICON = 'Location Icon',
  EMAIL_ICON = 'Email Icon',
  PHONE_ICON = 'Phone Icon',
}

export const NAVIGATION_LIST: NavigationItem[] = [
  {
    to: PATH.HOME,
    title: 'Home',
  },
  {
    to: PATH.DASHBOARD,
    title: 'Dashboard',
  },
  {
    to: PATH.PROFILE,
    title: 'My account',
  },

]
