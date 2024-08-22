import { useState, useEffect } from 'react'
import { ColorSchemeName, Platform, StatusBar, useColorScheme } from 'react-native'
import { useAppSelector } from '../hooks/reduxHooks'
import { BaseThemeInterface, baseTheme } from './themes/baseTheme'
import { ThemeConfigInterface, lightStyle } from './themes/lightTheme'
import { darkStyle } from './themes/darkTheme'
import _ from 'lodash'
import { THEME_ID } from '../../redux/appSlice'

export type ThemeInterface = BaseThemeInterface & ThemeConfigInterface

type DefinedThemes = Exclude<THEME_ID, THEME_ID.AS_DEVICE>
const THEMES: { [key in DefinedThemes]: ThemeInterface } = {
  [THEME_ID.DARK]: _.merge({}, baseTheme, darkStyle),
  [THEME_ID.LIGHT]: _.merge({}, baseTheme, lightStyle),
}

export function useThemeChangeListener() {
  const { themeId: preferredThemeId } = useAppSelector((state) => state.app)
  const deviceTheme = useColorScheme()
  const [currentTheme, setCurrentTheme] = useState<ThemeInterface>(
    _.merge({}, baseTheme, lightStyle),
  )

  const changeTheme = (themeId: DefinedThemes) => {
    const theme = THEMES[themeId]
    setCurrentTheme(theme)

    //https://stackoverflow.com/questions/66489117/how-to-fix-rctstatusbarmanager-module-requires-that-the-uiviewcontrollerbasedst
    // const updateStatusBarStyle = Platform.select({
    //   ios: undefined, //changing UIViewControllerBasedStatusBarAppearance in *.plist does not affect to error appearance
    //   android: () => {
    //     if (themeId === THEME_ID.DARK) StatusBar.setBarStyle('light-content')
    //     else StatusBar.setBarStyle('dark-content')
    //   },
    // })
    // updateStatusBarStyle && updateStatusBarStyle()
  }
  useEffect(() => {
    console.log('preferredThemeId:', preferredThemeId)
    if (preferredThemeId === THEME_ID.AS_DEVICE) {
      const _deviceTheme = deviceTheme?.toUpperCase() as DefinedThemes
      changeTheme(_deviceTheme)
    } else if (preferredThemeId) {
      changeTheme(preferredThemeId)
      return
    }
  }, [preferredThemeId, deviceTheme])

  return currentTheme
}
