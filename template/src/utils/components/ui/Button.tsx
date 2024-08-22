import React from 'react'
import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native'
import { PALLETTE } from '../../theme/consts/pallette'
import { useThemeContext } from '@theme/ThemeProvider'

type ButtonTypes = 'primary' | 'secondary' | 'text' | 'outlined'
interface Props {
  title: string
  onPress: () => void
  type?: ButtonTypes
}

export default function Button({ title, onPress, type = 'primary' }: Props) {
  const { theme } = useThemeContext()

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[type]]}>
      <Text
        style={[
          styles.title,
          type === 'text' ? theme.typography.default : { color: styles[type].color },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderRadius: 30,
    margin: 5,
  },
  title: {
    alignItems: 'center',
    letterSpacing: 1.1,
    fontSize: 14,
    fontFamily: '',
  },
  primary: {
    color: PALLETTE.neutral100,
    backgroundColor: PALLETTE.primary300,
  },
  secondary: {
    color: PALLETTE.neutral900,
    backgroundColor: PALLETTE.primary300,
  },
  text: {
    color: PALLETTE.neutral400,
    width: 'auto', //remove it if we want to take whole area
    backgroundColor: 'transparent',
  },
  outlined: {
    color: PALLETTE.primary300,
    borderColor: PALLETTE.primary300,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
  },
})
