import { StyleSheet } from 'react-native'
import { PALLETTE } from '../consts/pallette'
import { SIZES } from '../consts/sizes'


const typography = StyleSheet.create({
  danger: {
    color: PALLETTE.angry500,
  },

  default: {
    fontSize: SIZES.md,
  },
  
  h1: {
    fontSize: SIZES.xl,
  },

  h2: {
    fontSize: SIZES.lg,
  },

})

const style = StyleSheet.create({

})

export const baseStyle = {
  typography: typography,
  ...style,
}

export type BaseStyleInterface = typeof baseStyle
export type TypographyInterface = typeof typography
