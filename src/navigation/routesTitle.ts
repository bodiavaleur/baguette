import {AuthRoutes, DashboardRoutes} from './routes';
import {RouteStrings} from '~config/strings';

interface RouteTitle {
  [key: string]: RouteStrings;
}

export const ROUTES_TITLE: RouteTitle = {
  [AuthRoutes.Login]: RouteStrings.AppName,
  [AuthRoutes.Registration]: RouteStrings.AppName,
};
