import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import Template, { TemplateProps } from '../screens/Template'
import Settings from '../screens/Settings/Settings'
import { objectEntries } from '../utils/typescriptTools'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

type ParamList = {
  HomeTab: TemplateProps
  SearchTab: TemplateProps
  SettingsTab: TemplateProps
}

export type BottomNavigation = NavigationProp<ParamList>
const BottomStack = createMaterialTopTabNavigator<ParamList>()

type TabElements = Record<
  keyof ParamList,
  {
    icon: string
    iconFocused: string
    component: React.ComponentType<any>
    label: string
  }
>

const elements: TabElements = {
  HomeTab: {
    icon: 'home-outline',
    iconFocused: 'home-sharp',
    component: Template,
    label: 'Home',
  },
  SearchTab: {
    icon: 'search-outline',
    iconFocused: 'search-sharp',
    component: Template,
    label: 'Search',
  },
  SettingsTab: {
    icon: 'settings-outline',
    iconFocused: 'settings-sharp',
    component: Settings,
    label: 'Settings',
  },
  
}

export default function HomeBottomNavigator() {
  // const { theme } = useThemeContext()
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider>
      <BottomStack.Navigator
        initialRouteName="HomeTab"
        tabBarPosition="bottom"
        style={{
          //paddingTop: insets.top,
          paddingBottom: insets.bottom / 2,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
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
                focused ? elements[route.name].iconFocused : elements[route.name].icon
              }
              size={25}
            />
          ),
          lazyPlaceholder: () => <ActivityIndicator />,
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
