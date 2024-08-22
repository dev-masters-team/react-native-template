import React, { memo, ReactNode, useState } from 'react'
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native'
import IoniconsIcons from 'react-native-vector-icons/Ionicons'
import { useThemeContext } from '@theme/ThemeProvider'
import { PALLETTE } from '../../theme/consts/pallette'
import { useClickOutside } from 'react-native-click-outside'
import { useDev } from '../../../../dev-tools/useDev'

interface Props extends TextInputProps {
  prefixIconName?: string
  suffix?: boolean
  containerStyle?: ViewStyle
}
export default memo(Input, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
})
//React.FC<InputWithLogoProps>
function Input({
  containerStyle,
  prefixIconName,
  suffix,
  textContentType = 'none',
  ...textInputProps
}: Props) {
  const { theme } = useThemeContext()
  const [isPwdVisible, setIsPwdVisible] = useState<boolean>(false)

  useDev('Input').reRendering()

  return (
    <View style={[theme.inputContainer, styles.container, containerStyle]}>
      {prefixIconName && (
        <IoniconsIcons
          name={prefixIconName}
          size={20}
          style={[styles.icon, theme.typography.default]}
        />
      )}
      <TextInput
        style={[styles.input, theme.typography.default]}
        placeholderTextColor={theme.typography.default.color}
        secureTextEntry={textContentType === 'password' && !isPwdVisible}
        {...textInputProps}
      />

      {suffix && (
        <TouchableOpacity onPress={() => setIsPwdVisible((prev) => !prev)}>
          <IoniconsIcons
            name={isPwdVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            style={[styles.icon, theme.typography.default]}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    minHeight: 50,
    padding: 15,
    borderRadius: 30,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
  },
})
