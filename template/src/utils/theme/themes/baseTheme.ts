import { StyleSheet, Platform } from 'react-native'
import { PALLETTE } from '../consts/pallette'
import { SIZES } from '../consts/sizes'
import tinycolor from 'tinycolor2'

const typography = StyleSheet.create({
  danger: {
    color: PALLETTE.angry300,
  },

  default: {
    color: PALLETTE.neutral200,
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
  categoryPlaylistName: {
    backgroundColor: tinycolor(PALLETTE.neutral200).setAlpha(0.5).toString(),
    color: PALLETTE.neutral700,
  },

  categoryPlaylistScroll: {
    backgroundColor: PALLETTE.neutral900,
  },

  categoryPlaylistTitle: {
    color: PALLETTE.neutral900,
  },
  //Only for styles that will be changed from one theme - to another one
  inputContainer: {
    backgroundColor: PALLETTE.neutral100,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
    }),
  },
  playlistName: {
    backgroundColor: tinycolor(PALLETTE.neutral200).setAlpha(0.5).toString(),
    color: PALLETTE.neutral700,
  },
  songActive: {
    backgroundColor: PALLETTE.neutral500,
  },
})

export const baseTheme = {
  typography: typography,
  ...style,
}

export type BaseThemeInterface = typeof baseTheme
export type TypographyInterface = typeof typography
