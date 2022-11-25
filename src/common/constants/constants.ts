import { PATH } from '../../routes/path'
import type { NavigationItem } from '../interfaces/navigation-item'

export enum ALT_IMG {
  LOGO_ICON = 'Logo Icon',
  SCREEN_IMG = 'Screen Image',
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
]
