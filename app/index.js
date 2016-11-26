import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import { Provider } from 'react-redux';

import initStore from 'store';

import Router from './Router';

const store = initStore();

const navigationContext = new NavigationContext({
  router: Router,
  store,
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation id="root" navigatorUID="root" initialRoute={Router.getRoute('phoneEntryScreen')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
