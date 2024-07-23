import React from 'react'
import { View, Text, StatusBar } from 'react-native'
export interface TemplateProps {
  name?: string
}
export default function Template({name}: TemplateProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Template screen {name}</Text>
    </View>
  )
}
