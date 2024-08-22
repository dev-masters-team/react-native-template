import React from 'react'
import { ThemeInterface } from './useThemeChangeListener'
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
  ToastConfig,
} from 'react-native-toast-message'
import { StyleSheet } from 'react-native'

export const toastThemeConfig = (theme: ThemeInterface): ToastConfig => ({
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={[theme.externalPackages.toast.success]}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      text1Style={[styles.title, theme.externalPackages.toast.text1]}
      text2Style={styles.subtitle}
    />
  ),
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={theme.externalPackages.toast.error}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text1Style={[styles.title, theme.externalPackages.toast.text1]}
      text2Style={styles.subtitle}
    />
  ),
  info: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <InfoToast
      {...props}
      style={theme.externalPackages.toast.error}
      text1Style={[styles.title, theme.externalPackages.toast.text1]}
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
    paddingLeft: 10,
  },
})
