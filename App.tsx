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

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator/> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>

    </NavigationContainer>
    
      
    
  )
}


export default App;