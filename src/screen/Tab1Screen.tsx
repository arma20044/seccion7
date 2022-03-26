import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

const { top } = useSafeAreaInsets();

  return (
    <View style={ {...styles.globalMargin,
    marginTop: top + 10}}>
        <Text style={ styles.title}>Iconos</Text>
        <Text>
          <TouchableIcon iconName="airplane-outline" />
          <TouchableIcon iconName="car" />
          <TouchableIcon iconName="sad" />
          <TouchableIcon iconName="square" />
          <TouchableIcon iconName="triangle" />
          <TouchableIcon iconName="heart" />
         
        </Text>
        
    </View>
  )
}
