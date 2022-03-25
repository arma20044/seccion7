import 'react-native-gesture-handler';

import React from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const { width } = useWindowDimensions();

export function MenuLateralBasico() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:
      width >= 768 ? 'permanent' : 'front'
    
    }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}