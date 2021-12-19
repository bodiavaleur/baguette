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

export enum TrainingRoutes {
  Root = 'TrainingRoot',
  Menu = 'TrainingMenu',
  Flashcards = 'TrainingFlashcards',
}

export const DashboardRoutes = {
  Root: 'DashboardRoot',
  Home: 'DashboardHome',
  Dictionary: DictionaryRoutes.Root,
  Training: TrainingRoutes.Root,
  Account: 'DashboardAccount',
  AddWord: 'DashboardAddWord',
};
