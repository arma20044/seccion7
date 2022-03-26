import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screen/SettingsScreen';
import { Tab1Screen } from '../screen/Tab1Screen';
import { Tab2Screen } from '../screen/Tab2Screen';
import { Tab3Screen } from '../screen/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';



export const Tabs = () => {
  return Platform.OS === 'ios'
  ? <TabsiOS/>
  : <TabsAndroid/>
}


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import  Icon from 'react-native-vector-icons/Ionicons';

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = ()  => {
  return (
    <BottomTabAndroid.Navigator
    
      sceneAnimationEnabled= {true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions= { ({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          //borderTopWidth: 1,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ( {color, focused}) => {

          let iconName: string='';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'              
              break;

              case 'Tab2Screen':
              iconName = 'T2'              
              break;

              case 'StackNavigator':
              iconName = 'St'              
              break;
          
            default:
              break;
          }


          return <Text style={ {color} }> { iconName } </Text>

        }
      })
    }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'tab3'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const ButtomTabiOS = createBottomTabNavigator();



export function TabsiOS() {
  return (
    <ButtomTabiOS.Navigator
    
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
      screenOptions= { ({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          //backgroundColor : 'red',
          borderTopColor: colores.primary,
          //borderTopWidth: 1,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ( {color, focused, size}) => {

          let iconName: string='';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'globe'              
              break;

              case 'Tab2Screen':
              iconName = 'sad'              
              break;

              case 'StackNavigator':
              iconName = 'ice-cream'              
              break;
          
            default:
              break;
          }


          return <Text style={ {color} }>
            <Icon name={iconName} size={25}/>
          </Text>

        }
      })
    }
      

    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' , tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <ButtomTabiOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <ButtomTabiOS.Screen name="Tab2Screen" options={{ title: 'tab2'}} component={TopTabNavigator} />
      <ButtomTabiOS.Screen name="StackNavigator" options={{ title: 'tab3'}} component={StackNavigator} />
      
    </ButtomTabiOS.Navigator>
  );
}