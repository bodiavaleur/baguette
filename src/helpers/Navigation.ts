import React from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList, RouteParams} from '~types/navigation';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

class NavigationRef {
  reset(route: string, params: RouteParams) {
    return navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: route, params}],
      }),
    );
  }
}

export const Navigation = new NavigationRef();
