import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, Vibration, View } from 'react-native';
import { Pagina2Screen } from './Pagina2Screen';
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';


//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ( { navigation }: Props) => {

  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: ()=> (
        <Button
          title='Menu'
          onPress={ () => navigation.toggleDrawer()}
        />
      )
    })
  }, [])
  

  return (
      <View style={ styles.globalMargin}>
          <Text style={ styles.title}>Pagina1Screen</Text>

          <Button
            title={'Ir a Pagina 2'}
            onPress={ () => navigation.navigate('Pagina2Screen')}
          />

         <Text style={{
           marginVertical: 20,
           fontSize: 20,
           marginLeft: 5
         }}>Navegar con Argumentos</Text>

         <View style={{ flexDirection: 'row'}}>

           <TouchableOpacity
           style={ {...styles.botonGrande,
          backgroundColor: '#5856D6'} }
          onPress={ () => navigation.navigate('PersonaScreen' , {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text>
          <Icon name="man" size={30} color="#900" />
          </Text>
          <Text style={
            styles.botonGrandeTexto
          }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={ {...styles.botonGrande,
        backgroundColor: '#FF9427'} }
          onPress={ () => navigation.navigate('PersonaScreen' , {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text>
          <Icon name="woman" size={30} color="#900" />
          </Text>
          <Text style={
            styles.botonGrandeTexto
          }>Maria</Text>

        </TouchableOpacity>

         </View>

        

      </View>
    
  )
}
