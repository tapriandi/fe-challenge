import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/services/store';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './src/navigation';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
