import React from 'react'
import Toast from 'react-native-toast-message'
import { useThemeContext } from './ThemeProvider'
import { toastConfig } from './toastConfig'

export default function ThemedToaster() {
  const { theme } = useThemeContext()
  return <Toast config={toastConfig(theme)} />
}
