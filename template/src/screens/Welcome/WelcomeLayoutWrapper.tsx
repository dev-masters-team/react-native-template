import React, { type ReactNode } from 'react'
// import DeviceInfo from 'react-native-device-info'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'
import { useThemeContext } from '../../utils/theme/ThemeProvider'
import Logo from '../../../assets/logo.svg'


export default function WelcomeLayoutWrapper({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext()

  return (
    <View style={[styles.mainContainer, theme.primaryBackground]}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Logo width={150} height={150} preserveAspectRatio="none"/>
        <View style={styles.titleContainer}>
          <Text style={[theme.typography.h1, styles.titleFirstWord]}>Dev</Text>
          <Text style={[theme.typography.h1, styles.titleSecondWord]}>Masters</Text>
        </View>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  logo: {
    height: 100,
    marginBottom: -10,
  },
})
