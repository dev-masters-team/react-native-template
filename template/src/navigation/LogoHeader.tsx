import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native'
import LogoName from '../../assets/images/logos/ico+name-transparent.svg'
import { SIZES } from '@theme/consts/sizes'
import { useThemeContext } from '@theme/ThemeProvider'

export default function LogoHeader() {
  const { theme } = useThemeContext()

  return (
    <View style={[styles.container, theme.primaryBackground]}>
      <LogoName
        height={200}
        width={200}
        // preserveAspectRatio="none"
        color={theme.colors.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.xs,
  },
})
