import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard
} from "../screens";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  HomeScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  AuthLoadingScreen,
  LoginScreen
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
