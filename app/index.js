import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import { Provider } from 'react-redux';

import { getDraftApplicationData } from 'data/storage';
import initStore from 'store';

import Router from './Router';

class App extends Component {
  state = {
    ready: false,
  };

  componentWillMount() {
    this._initialize();
  }
  _initialize = async () => {
    const draftApplicationData = await getDraftApplicationData();

    this.store = initStore(draftApplicationData);
    this.navigationContext = new NavigationContext({
      router: Router,
      store: this.store,
    });

    const initialScreen = draftApplicationData.application ? 'householdInfoScreen' : 'phoneEntryScreen';

    this.setState({
      ready: true,
      initialScreen,
    });
  }
  render() {
    if (!this.state.ready) {
      return null;
    }

    return (
      <Provider store={this.store}>
        <NavigationProvider context={this.navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation id="root" navigatorUID="root" initialRoute={Router.getRoute(this.state.initialScreen)} />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
