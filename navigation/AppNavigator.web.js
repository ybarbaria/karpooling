import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
} from "../screens";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  HomeScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  LoginScreen
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { initialRouteName: "AuthLoadingScreen", history: 'hash' });
