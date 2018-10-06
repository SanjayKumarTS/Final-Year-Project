import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
export default class App extends React.Component {

  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  //Login: LoginScreen
})
