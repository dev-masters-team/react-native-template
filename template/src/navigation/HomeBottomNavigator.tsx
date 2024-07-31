import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Template, { TemplateProps } from '../screens/Template'
import Settings from '../screens/Settings/Settings'
import { objectEntries } from '../utils/typescriptTools'

type ParamList = {
  HomeTab: TemplateProps
  SearchTab: TemplateProps
  SettingsTab: TemplateProps
}

export type BottomNavigation = NavigationProp<ParamList>
const BottomStack = createBottomTabNavigator<ParamList>()

type TabElements = Record<
  keyof ParamList,
  {
    icon: string
    iconSelected: string
    component: React.ComponentType<any>
    label: string
  }
>

const elements: TabElements = {
  HomeTab: {
    icon: 'home-outline',
    iconSelected: 'home-sharp',
    component: Template,
    label: 'Home',
  },
  SearchTab: {
    icon: 'search-outline',
    iconSelected: 'search-sharp',
    component: Template,
    label: 'Search',
  },
  SettingsTab: {
    icon: 'settings-outline',
    iconSelected: 'settings-sharp',
    component: Settings,
    label: 'Settings',
  },
  
}

export default function HomeBottomNavigator() {
  const { t } = useTranslation('common')
  // const { theme } = useThemeContext()
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider>
      <BottomStack.Navigator
        initialRouteName="HomeTab"
        screenOptions={({ route }) => ({
          tabBarPressColor: 'transparent',
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarLabel: ({ focused }) => (
            <View style={styles.tabBar}>
              <Text
                allowFontScaling={false}
              >
                {elements[route.name].label}
              </Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? elements[route.name].iconSelected : elements[route.name].icon
              }
              size={25}
            />
          ),
        })}
      >
        {objectEntries(elements).map(([routeName, config]) => (
          <BottomStack.Screen
            key={routeName}
            name={routeName}
            component={config.component}
          />
        ))}
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
