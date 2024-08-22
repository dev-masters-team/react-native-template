import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { TypographyInterface } from './baseTheme'
import { PALLETTE } from '../consts/pallette'

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
    backgroundColor: PALLETTE.neutral300,
  },
})

const colors = {
  default: PALLETTE.neutral900,
  inverted: PALLETTE.neutral100,
  logo: PALLETTE.neutral900,
}

const externalPackages: ExternalPackagesInterface = {
  toast: {
    error: {
      backgroundColor: PALLETTE.neutral200,
      borderLeftColor: PALLETTE.angry300,
    },
    info: {
      backgroundColor: PALLETTE.neutral200,
      borderLeftColor: PALLETTE.angry300,
    },
    success: {
      backgroundColor: PALLETTE.neutral200,
      borderLeftColor: PALLETTE.success300,
    },
    text1: { color: PALLETTE.neutral700 },
  },
}

export const lightStyle = {
  colors,
  externalPackages,
  typography,
  ...style,
}

export type ThemeConfigInterface = typeof lightStyle
export interface ExternalPackagesInterface {
  toast: {
    error: ViewStyle
    info: ViewStyle
    success: ViewStyle
    text1: TextStyle
  }
}
