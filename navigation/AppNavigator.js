import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
} from "../screens";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    HomeScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    LoginScreen
  }
  ), {
  initialRouteName: "AuthLoadingScreen"
}
);
