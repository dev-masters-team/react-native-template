import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { TypographyInterface } from './baseStyle'
import { ScreenProps } from 'react-native-screens'
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs'
import { PALLETTE } from '../consts/pallette'

/*
 *  We could either create an interface, to be passed to each theme while creating it's style
 *
 *   example:
 *    | export interface ThemeConfigInterface {
 *    |    emptyChats: TextStyle
 *    |    background: ViewStyle
 *    |  }
 *    | // export const lightStyle:ThemeConfigInterface = StyleSheet.create({
 *    | // or:
 *    |  export const lightStyle = StyleSheet.create<ThemeConfigInterface>({
 *
 *  either consider one theme as main interface and create the rest themes by it's image
 */

const colors = StyleSheet.create({
 default: {
  color: PALLETTE.neutral800
 }
})

const typography = StyleSheet.create<
  Partial<StyleSheet.NamedStyles<TypographyInterface>>
>({
  default: {
    color: PALLETTE.neutral800,
  },
  h1: {
    color: PALLETTE.neutral800,
  },
  h2: {
    color: PALLETTE.neutral800,
  },
})

const style = StyleSheet.create({
  primaryBackground: {
    backgroundColor: PALLETTE.neutral200,
  },
  secondaryBackground: {
    backgroundColor: PALLETTE.neutral200,
  },
})

const externalPackages: ExternalPackagesInterface = {
  reactNativeScreens: {
    screenProps: 'dark',
    topTabBarStyle: {
      backgroundColor: style.secondaryBackground.backgroundColor,
    },
  },
  
  toast: {
    error: {
      backgroundColor: PALLETTE.neutral200,
      borderLeftColor: PALLETTE.angry500,
    },
    success: {
      backgroundColor: PALLETTE.neutral200,
      borderLeftColor: PALLETTE.success500,
    },
    text1: { color: PALLETTE.neutral700 },
  },
}

export const lightStyle = {
  externalPackages,
  typography,
  colors,
  ...style,
}

export type ThemeConfigInterface = typeof lightStyle
export interface ExternalPackagesInterface {
  reactNativeScreens: {
    screenProps: ScreenProps['statusBarStyle']
    topTabBarStyle: MaterialTopTabNavigationOptions['tabBarStyle']
  }
  toast: {
    error: ViewStyle,
    success: ViewStyle,
    text1: TextStyle,
  }
}
