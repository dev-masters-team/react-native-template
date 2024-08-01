import React from 'react'
import Toast from 'react-native-toast-message'
import { useThemeContext } from './ThemeProvider'
import { ThemeInterface } from './useThemeChangeListener'
import { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message'
import { StyleSheet } from 'react-native'


export default function ThemedToaster() {
  const { theme } = useThemeContext()
  return <Toast config={toastConfig(theme)} />
}


const toastConfig = (theme: ThemeInterface) => ({
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={[theme.externalPackages.toast.success]}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      text1Style={[styles.title, theme.externalPackages.toast.text1,]}
      text2Style={styles.subtitle}
    />
  ),
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={theme.externalPackages.toast.error}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text1Style={[
        styles.title,
        theme.externalPackages.toast.text1,
      ]}
      text2Style={styles.subtitle}
    />
  ),
})

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    paddingLeft: 10
  },
})
