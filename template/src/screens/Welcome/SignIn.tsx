import React from 'react'
import { View, Text, StatusBar, Button, ActivityIndicator } from 'react-native'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { attemptAuth, setJWT } from '../../redux/auth/authSlice'
import { useAttemptListener } from '../../utils/hooks/useAttemptListener'
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
      <Button title='login' onPress={() => {dispatch(attemptAuth({email: 'user@email.com', password: 'password'}))}}/>
      {isLoading && <ActivityIndicator/>}
    </View>
  )
}
