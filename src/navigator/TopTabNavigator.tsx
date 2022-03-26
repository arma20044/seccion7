import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screen/ChatScreen';
import { ContactsScreen } from '../screen/ContactsScreen';
import { AlbumsScreen } from '../screen/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
    style={{
      paddingTop: top
    }}
    sceneContainerStyle={{
      backgroundColor: 'white',
      shadowColor: 'transparent',
      elevation: 0
    }}
      screenOptions={ ({route}) => ({
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: colores.primary,
          elevation: 0
          //backgroundColor: 'red'
          
        },
        tabBarPressColor: 'blue',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarIcon: ( {color, focused}) => {

          let iconName: string='';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles'              
              break;

              case 'Contacts':
              iconName = 'contacts'              
              break;

              case 'Albums':
              iconName = 'albums'              
              break;
          
            default:
              break;
          }


          return <Text style={ {color: 'red'} }>
              <Icon name={iconName} size={20}/>
             
             </Text>

        }
        
        
        
})}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}