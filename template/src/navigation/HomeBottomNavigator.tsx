import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import Template, { TemplateProps } from '../screens/Template'
import Settings from '../screens/Settings/Settings'
import { objectEntries } from '../utils/typescriptTools'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useThemeContext } from '@theme/ThemeProvider'

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
  const { theme } = useThemeContext()
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={[{ flex: 1 }, theme.primaryBackground]} edges={['top']}>
      <BottomStack.Navigator
        initialRouteName="HomeTab"
        tabBarPosition="bottom"
        sceneContainerStyle={[theme.primaryBackground]}
        screenOptions={({ route }) => ({
          tabBarStyle: theme.primaryBackground,
          tabBarContentContainerStyle: [
            theme.primaryBackground,
            {
              borderRadius: 50,
              margin: 10,
            },
          ],
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarIndicatorContainerStyle: [
            theme.secondaryBackground,
            {
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
            },
          ],
          tabBarLabel: ({ focused }) => (
            <Text
              allowFontScaling={false}
              style={[styles.tabBarLabel, theme.typography.default]}
            >
              {elements[route.name].label}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? elements[route.name].iconFocused : elements[route.name].icon
              }
              color={theme.colors.default}
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
      <SafeAreaView style={[{ flex: 0 }, theme.secondaryBackground]} edges={['bottom']} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
  },
})
