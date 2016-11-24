import React, { Component } from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation id="root" navigationUID="root" initialRoute={Router.getRoute('phoneEntryScreen')} />
      </NavigationProvider>
    );
  }
}

export default App;
