import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from 'react-native-screens';
import { Hola } from './src/screen/Hola';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
          {/* <StackNavigator/> */}
          {/* <MenuLateralBasico/> */}
          <MenuLateral/>
          {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
    
      
    
  )
}

const AppState = ({ children }: { children: JSX.Element}) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}


export default App;