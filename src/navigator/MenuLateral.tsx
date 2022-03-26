import 'react-native-gesture-handler';

import React from 'react'


import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const { width } = useWindowDimensions();

export function MenuLateral() {
  return (
    <Drawer.Navigator
    
    screenOptions={{
          headerShown: false,
      drawerType:
      width >= 768 ? 'permanent' : 'front'
        }}
    drawerContent={ ( props ) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

  return (
      <DrawerContentScrollView>

        {/* Parte del avatar */}
          <View style={ styles.avatarContainer}>
            <Image
              source={{uri: 'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-26.jpg'}}
              style={ styles.avatar }
            />
          </View>


            {/* opciones de menu */}
          <View style={ styles.menuContainer}>

            <TouchableOpacity 
            style={{...styles.menuBoton,
            flexDirection: 'row'
            }}
            onPress={ () => navigation.navigate('Tabs') }>
        
                  
                    <Icon name='compass' size={23}/>
                  
                  <Text style={styles.menuTexto}>Navegacion</Text>
              
             
              
              
            </TouchableOpacity>

            <TouchableOpacity 
            style={{...styles.menuBoton,
            flexDirection: 'row'}}
            onPress={ () => navigation.navigate('SettingsScreen') }>
               <Icon name='construct' size={23}/>
              <Text style={styles.menuTexto}>Ajustes</Text>
            </TouchableOpacity>

          </View>

      </DrawerContentScrollView>
    )

}