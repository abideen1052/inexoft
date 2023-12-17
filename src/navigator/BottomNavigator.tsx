/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/home.svg';
import OrderIcon from '../assets/icons/shopping-bag.svg';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import {Colors} from '../constants/theme';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.White,
          height: 55,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            display: 'none',
          },
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 11,
          },
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                width={80}
                height={20}
                fill={focused ? Colors.PrimaryColor : Colors.Grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            display: 'none',
          },
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 11,
          },
          tabBarIcon: ({focused}) => {
            return (
              <OrderIcon
                width={80}
                height={20}
                fill={focused ? Colors.PrimaryColor : Colors.Grey}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
