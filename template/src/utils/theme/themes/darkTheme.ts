import { StyleSheet } from 'react-native'
import { ExternalPackagesInterface, ThemeConfigInterface } from './lightTheme'
import { PALLETTE } from '../consts/pallette'

const colors = StyleSheet.create({
  default: {
    color: PALLETTE.neutral400
  }
})

const typography = StyleSheet.create({
  default: {
    color: PALLETTE.neutral400,
  },
  h1: {
    color: PALLETTE.neutral400,
  },
  h2: {
    color: PALLETTE.neutral400,
  },
})

const style = StyleSheet.create({
  primaryBackground: {
    backgroundColor: PALLETTE.neutral800,
  },
  secondaryBackground: {
    backgroundColor: PALLETTE.neutral800,
  },
  secondaryDarkerBackground: {
    backgroundColor: PALLETTE.neutral900,
  },
})

const externalPackages: ExternalPackagesInterface = {
  reactNativeScreens: {
    screenProps: 'light',
    topTabBarStyle: {
      backgroundColor: style.secondaryDarkerBackground.backgroundColor,
    },
  },
  toast: {
    error: {
      backgroundColor: PALLETTE.neutral800,
      borderLeftColor: PALLETTE.angry500,
    },
    success: {
      backgroundColor: PALLETTE.neutral800,
      borderLeftColor: PALLETTE.success500,
    },
    text1: { 
      color: PALLETTE.neutral200 
    },
  },
}

export const darkStyle: ThemeConfigInterface = {
  externalPackages,
  typography,
  colors,
  ...style,
}
