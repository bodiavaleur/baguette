import {
  AuthRoutes,
  DashboardRoutes,
  DictionaryRoutes,
  TrainingRoutes,
  WordRoutes,
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
  [DictionaryRoutes.MyDictionaries]: RouteStrings.MyDictionaries,
  [DictionaryRoutes.NewDictionary]: RouteStrings.NewDictionary,

  [TrainingRoutes.Menu]: RouteStrings.TrainingMenu,
  [TrainingRoutes.Flashcards]: RouteStrings.Flashcards,

  [WordRoutes.Word]: RouteStrings.WordDetails,
  [WordRoutes.EditWord]: RouteStrings.EditWord,
};
