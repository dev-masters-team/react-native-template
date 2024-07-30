import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Pug from '../../assets/images/pug.svg'
export interface TemplateProps {
  name?: string
}
export default function Template({name}: TemplateProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pug height={200} width={200} />
      <Text>Template screen {name}</Text>
    </View>
  )
}
