import React from 'react';
import {Provider} from 'react-redux';

import {store} from '~redux/index';
import RootNavigator from '~navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
