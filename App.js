import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { IconButton } from 'react-native-paper';

import Animals from './views/Animals';
import Owners from './views/Owners';
import Appointments from './views/Appointments';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Owners: {
      screen: Owners,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconButton icon="account" color={tintColor} size={30} />,
      },
    },
    Animals: {
      screen: Animals,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconButton icon="donkey" color={tintColor} size={30} />,
      },
    },
    Appointments: {
      screen: Appointments,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IconButton icon="calendar-clock" color={tintColor} size={30} />,
      },
    },
  },
  {
    initialRouteName: 'Owners',
    labeled: false,
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  },
);

const RootStack = createStackNavigator({
  Main: {
    screen: TabNavigator,
    navigationOptions: () => ({
      headerTitle: 'Veterinary Clinic',
      headerTintColor: '#f0edf6',
      headerStyle: { backgroundColor: '#694fad' },
    }),
  },
});

export default createAppContainer(RootStack);
