import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Pug from '../../assets/images/pug.svg'
import Icon from 'react-native-vector-icons/FontAwesome'
import LongPressWithScale from '../utils/components/LongPressWithScale'
export interface TemplateProps {
  name?: string
}
export default function Template({name}: TemplateProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LongPressWithScale onLongPress={() => console.log('long press - гав')}>
        <View style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Pug />
        </View>
      </LongPressWithScale>
      <Icon name="rocket" size={30} color="#900" />
      <Text>Template screen {name}</Text>
    </View>
  )
}
