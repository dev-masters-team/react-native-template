import React, { type ReactNode } from 'react'
// import DeviceInfo from 'react-native-device-info'
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useThemeContext } from '@theme/ThemeProvider'
import Config from 'react-native-config'

export default function WelcomeLayoutWrapper({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 180, android: 0 })}
      style={[styles.mainContainer, theme.primaryBackground]}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleFirstWord: {
    fontFamily: 'Cocogoose',
  },
  titleSecondWord: {
    fontFamily: 'Cocogoose-Bold',
    fontWeight: 'bold',
  },
})
