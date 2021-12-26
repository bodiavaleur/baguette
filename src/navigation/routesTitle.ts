import {
  AuthRoutes,
  DashboardRoutes,
  DictionaryRoutes,
  TrainingRoutes,
} from './routes';
import {RouteStrings} from '~config/strings/routes';

interface RouteTitle {
  [key: string]: RouteStrings;
}

export const ROUTES_TITLE: RouteTitle = {
  [AuthRoutes.Login]: RouteStrings.AppName,
  [AuthRoutes.Registration]: RouteStrings.AppName,

  [DashboardRoutes.Home]: RouteStrings.Home,
  [DashboardRoutes.Account]: RouteStrings.Account,

  [DictionaryRoutes.Dictionary]: RouteStrings.Dictionary,
  [TrainingRoutes.Menu]: RouteStrings.TrainingMenu,
  [TrainingRoutes.Flashcards]: RouteStrings.Flashcards,

  [DictionaryRoutes.WordDetails]: RouteStrings.WordDetails,
};
