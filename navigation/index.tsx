export const routes = {
  entry: { path: '/' },
  signIn: { path: '/sign-in' },
  dashboard: {
    entry: {
      path: '/dashboard',
    },
    analytics: {
      path: '/dashboard/analytics',
    },
    wallets: {
      path: '/dashboard/wallets',
    },
    accounts: {
      path: '/dashboard/accounts',
    },
    settings: {
      path: '/dashboard/settings',
    },
    help_center: {
      path: '/dashboard/help-center',
    },
  },
};

import {
  LayoutDashboard,
  Hourglass,
  Handshake,
  Settings,
  Headset,
  Wallet,
} from 'lucide-react';
import { ReactElement } from 'react';

type Route = {
  name: string;
  path: string;
  icon: ReactElement;
};

const appRoutes: Route[] = [
  {
    name: 'Dashboard',
    path: routes.dashboard.entry.path,
    icon: <LayoutDashboard />,
  },
  {
    name: 'Analytics',
    path: routes.dashboard.analytics.path,
    icon: <Hourglass />,
  },
  {
    name: 'My Wallet',
    path: routes.dashboard.wallets.path,
    icon: <Wallet />,
  },
  {
    name: 'Accounts',
    path: routes.dashboard.accounts.path,
    icon: <Handshake />,
  },
  {
    name: 'Settings',
    path: routes.dashboard.settings.path,
    icon: <Settings />,
  },
  { name: '', path: '', icon: <></> },

  {
    name: 'Help center',
    path: routes.dashboard.help_center.path,
    icon: <Headset />,
  },
];

export default appRoutes;
