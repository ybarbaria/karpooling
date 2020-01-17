import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SearchScreen } from '../screens';

const config = Platform.select({
  headerMode: 'none',
  web: { headerMode: 'screen' },
  default: {}
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  { headerMode: 'none' }
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Ride',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
};

SearchStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const NewButtonStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
)

NewButtonStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} />
  )
}

const tabNavigator = createBottomTabNavigator({
  SearchStack: SearchStack,
  LinksStack,
  NewButtonStack,
  SettingsStack,
}, {
  tabBarOptions: {
    showLabel: false
  }
});

tabNavigator.path = '';

export default tabNavigator;
