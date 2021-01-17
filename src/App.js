import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, DarkTheme } from 'react-native-paper';
import Home from './screens/Home';

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={DarkTheme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    );
  }
}
