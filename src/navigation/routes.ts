export const AuthRoutes = {
  Root: 'AuthRoot',
  Login: 'AuthLogin',
  Registration: 'AuthRegistration',
};

export const WordRoutes = {
  Root: 'WordRoot',
  Word: 'WordRootWord',
  EditWord: 'WordRootEditWord',
};

export const DictionaryRoutes = {
  Root: 'DictionaryRoot',
  MyDictionaries: 'DictionaryMyDictionaries',
  MyWords: 'DictionaryMyWords',
  NewDictionary: 'DictionaryNewDictionary',
  Dictionary: 'DictionaryDictionary',
  WordDetails: WordRoutes.Root,
};

export const TrainingRoutes = {
  Root: 'TrainingRoot',
  Menu: 'TrainingMenu',
  Flashcards: 'TrainingFlashcards',
};

export const DashboardRoutes = {
  Root: 'DashboardRoot',
  Home: 'DashboardHome',
  Dictionary: DictionaryRoutes.Root,
  Training: TrainingRoutes.Root,
  Account: 'DashboardAccount',
  AddWord: 'DashboardAddWord',
};
