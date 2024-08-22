import { StyleSheet } from 'react-native'
import { ExternalPackagesInterface, ThemeConfigInterface } from './lightTheme'
import { PALLETTE } from '../consts/pallette'
import tinycolor from 'tinycolor2'

const colors = {
  default: PALLETTE.neutral100,
  inverted: PALLETTE.neutral900,
  logo: PALLETTE.primary300,
}

const typography = StyleSheet.create({
  default: {
    color: PALLETTE.neutral400,
  },
  h1: {
    color: PALLETTE.neutral400,
  },
  h2: {
    color: PALLETTE.neutral100,
  },
})

const style = StyleSheet.create({
  categoryPlaylistName: {
    backgroundColor: tinycolor(PALLETTE.neutral800).setAlpha(0.5).toString(),
    borderBottomColor: '#33a3f4',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 4,
    color: PALLETTE.neutral200,
  },
  categoryPlaylistScroll: {
    backgroundColor: PALLETTE.azure,
  },
  categoryPlaylistTitle: {
    color: PALLETTE.neutral200,
  },
  inputContainer: {
    backgroundColor: PALLETTE.neutral600,
  },
  playlistName: {
    backgroundColor: tinycolor(PALLETTE.neutral800).setAlpha(0.5).toString(),
    color: PALLETTE.neutral200,
  },
  primaryBackground: {
    backgroundColor: PALLETTE.neutral900,
  },
  secondaryBackground: {
    backgroundColor: PALLETTE.neutral700,
  },
})

const externalPackages: ExternalPackagesInterface = {
  toast: {
    error: {
      backgroundColor: PALLETTE.neutral800,
      borderLeftColor: PALLETTE.angry300,
    },
    info: {
      backgroundColor: PALLETTE.neutral800,
      borderLeftColor: PALLETTE.angry300,
    },
    success: {
      backgroundColor: PALLETTE.neutral800,
      borderLeftColor: PALLETTE.success300,
    },
    text1: {
      color: PALLETTE.neutral200,
    },
  },
}

export const darkStyle: ThemeConfigInterface = {
  colors,
  externalPackages,
  typography,
  ...style,
}
