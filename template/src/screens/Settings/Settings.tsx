import React from 'react'
import { View } from 'react-native'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { logout } from '../../redux/auth/authSlice'
import { useThemeContext } from '@theme/ThemeProvider'
import { PALLETTE } from '@theme/consts/pallette'
import { Button } from '@custom-ui'

export default function Settings() {
  const dispatch = useAppDispatch()
  const { theme } = useThemeContext()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="logout"
        type="outlined"
        onPress={() => {
          dispatch(logout())
        }}
      />
    </View>
  )
}
