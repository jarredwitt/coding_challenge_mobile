import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <StackNavigation id="root" navigationUID="root" initialRoute={Router.getRoute('phoneEntryScreen')} />
      </NavigationProvider>
    );
  }
}

export default App;
