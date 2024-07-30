import React from 'react'
import { View, Text, StatusBar, Button, ActivityIndicator } from 'react-native'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { attemptAuth, setJWT } from '../../redux/auth/authSlice'
import { useAttemptListener } from '../../utils/hooks/useAttemptListener'
import Config from 'react-native-config'
export interface TemplateProps {
  name?: string
}
export default function SignIn() {
  const dispatch = useAppDispatch()
  const isLoading = useAttemptListener({
    attempt: attemptAuth
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>env (APP_SCHEMA_EXAMPLE) - {Config.APP_SCHEMA_EXAMPLE}</Text>
      <Button title='login' onPress={() => {dispatch(attemptAuth({email: Config.DEV_CREDENTIALS_EMAIL || 'make email input', password: Config.DEV_CREDENTIALS_PASSWORD || 'make password input'}))}}/>
      {isLoading && <ActivityIndicator/>}
    </View>
  )
}
