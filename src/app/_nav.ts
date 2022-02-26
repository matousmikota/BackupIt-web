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
    name: 'Configs',
    url: '/configs',
    icon: 'icon-settings',
    children: [
      {
        name: 'Configs',
        url: '/configs/configs',
        icon: 'icon-settings'
      },
      {
        name: 'Sources',
        url: '/configs/sources',
        icon: 'icon-cloud-upload'
      },
      {
        name: 'Destinations',
        url: '/configs/destinations',
        icon: 'icon-cloud-download'
      }
    ]
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
