import React from 'react'
import { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { ThemeInterface } from './useThemeChangeListener'

export const toastConfig = (theme: ThemeInterface) => ({
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={[theme.externalPackages.toast.success, { padding: 0, flex: 1 }]}
      contentContainerStyle={{ paddingHorizontal: 0 }}
      text1Style={[
        {
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        theme.externalPackages.toast.text1,
      ]}
    />
  ),
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={theme.externalPackages.toast.error}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={2}
      text1Style={[
        {
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        theme.externalPackages.toast.text1,
      ]}
    />
  ),
})
