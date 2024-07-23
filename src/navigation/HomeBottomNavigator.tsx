import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import { NavigationProp } from '@react-navigation/native'

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Template, { TemplateProps } from '../screens/Template'
import Settings from '../screens/Settings/Settings'


const BottomStack = createBottomTabNavigator()

type ParamList = {
  HomeTab: TemplateProps
  SearchTab: TemplateProps
  SettingsTab: TemplateProps
}
export type BottomNavigation = NavigationProp<ParamList>


export default function HomeBottomNavigator() {
  const { t } = useTranslation('common')
  // const { theme } = useThemeContext()
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider>
      <BottomStack.Navigator
        initialRouteName="HomeTab"
      >
        <BottomStack.Screen
          name={'HomeTab'}
          component={Template}
        />
        <BottomStack.Screen
          name={'SearchTab'}
          component={Template}
        />
        <BottomStack.Screen
          name={'SettingsTab'}
          component={Settings}
        />
      </BottomStack.Navigator>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
})
