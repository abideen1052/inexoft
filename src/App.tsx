import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import StackNavigator from './navigator/StackNavigator';

function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

export default App;
