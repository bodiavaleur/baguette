export enum AuthRoutes {
  Root = 'AuthRoot',
  Login = 'AuthLogin',
  Registration = 'AuthRegistration',
}

export enum DictionaryRoutes {
  Root = 'DictionaryRoot',
  Dictionary = 'DictionaryDictionary',
  WordDetails = 'DictionaryWordDetails',
}

export const DashboardRoutes = {
  Root: 'DashboardRoot',
  Home: 'DashboardHome',
  Dictionary: DictionaryRoutes.Root,
  Training: 'DashboardTraining',
  Account: 'DashboardAccount',
  AddWord: 'DashboardAddWord',
};
