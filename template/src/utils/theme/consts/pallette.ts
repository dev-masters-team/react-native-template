import tinycolor from 'tinycolor2'

const COLOR_BASE = {
  default: '#191A27',
  primary: '#FFA902',
  secondary: '#E2EAE8',
  angry: '#C03403',
  success: '#33cc33',
  azure: '#35e4d6',
}

export const PALLETTE = {
  neutral100: '#ffffff',
  neutral200: '#FBFBFB',
  neutral300: '#f2f2f2',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#191A27',
  neutral800: '#191015',
  neutral900: '#000000',

  default: COLOR_BASE.default,

  primary100: tinycolor(COLOR_BASE.primary).lighten(20).toString(),
  primary200: tinycolor(COLOR_BASE.primary).lighten(10).toString(),
  primary300: COLOR_BASE.primary,
  primary400: tinycolor(COLOR_BASE.primary).darken(10).toString(),
  primary500: tinycolor(COLOR_BASE.primary).darken(20).toString(),

  secondary100: tinycolor(COLOR_BASE.secondary).lighten(20).toString(),
  secondary200: tinycolor(COLOR_BASE.secondary).lighten(10).toString(),
  secondary300: COLOR_BASE.secondary,
  secondary400: tinycolor(COLOR_BASE.secondary).darken(10).toString(),
  secondary500: tinycolor(COLOR_BASE.secondary).darken(20).toString(),

  angry100: tinycolor(COLOR_BASE.angry).lighten(20).toString(),
  angry200: tinycolor(COLOR_BASE.angry).lighten(10).toString(),
  angry300: COLOR_BASE.angry,
  angry400: tinycolor(COLOR_BASE.angry).darken(10).toString(),
  angry500: tinycolor(COLOR_BASE.angry).darken(10).toString(),

  success300: COLOR_BASE.angry,

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',

  azure: COLOR_BASE.azure,
}

function generateColorPalette(baseColor: string) {
  return {
    100: tinycolor(baseColor).lighten(20).toString(),
    200: tinycolor(baseColor).lighten(10).toString(),
    300: baseColor,
    400: tinycolor(baseColor).darken(10).toString(),
    500: tinycolor(baseColor).darken(20).toString(),
  }
}
