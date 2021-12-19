import {AuthRoutes, DashboardRoutes, DictionaryRoutes} from './routes';
import {RouteStrings} from '~config/strings';

interface RouteTitle {
  [key: string]: RouteStrings;
}

export const ROUTES_TITLE: RouteTitle = {
  [AuthRoutes.Login]: RouteStrings.AppName,
  [AuthRoutes.Registration]: RouteStrings.AppName,

  [DashboardRoutes.Home]: RouteStrings.Home,
  [DashboardRoutes.Dictionary]: RouteStrings.Dictionary,
  [DashboardRoutes.Training]: RouteStrings.Training,
  [DashboardRoutes.Account]: RouteStrings.Account,

  [DictionaryRoutes.WordDetails]: RouteStrings.WordDetails,
};
