import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Options'
  },
  {
    name: 'Destinations',
    url: '/configs/destinations',
    icon: 'icon-cloud-download'
  },
  {
    name: 'Configs',
    url: '/configs/configs',
    icon: 'icon-wrench'
  },
  {
    name: 'Config assigning',
    url: '/configs/config-assign',
    icon: 'icon-wrench'
  },
  {
    name: 'Admins',
    url: '/admins',
    icon: 'icon-badge',
  },
  {
    name: 'Clients',
    url: '/clients',
    icon: 'icon-people',
  },
  {
    name: 'Logs',
    url: '/logs',
    icon: 'icon-list',
  }
];
