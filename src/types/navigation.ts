export type RouteParams<T extends {} = {[key: string]: any}> = {
  screen?: keyof RootStackParamList;
  params?: T;
};

export type RootStackParamList = {};
