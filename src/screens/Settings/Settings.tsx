import React from 'react'
import { View, Text, StatusBar, Button } from 'react-native'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { logout, setJWT } from '../../redux/auth/authSlice'
export interface TemplateProps {
  name?: string
}
export default function Settings({name}: TemplateProps) {
  const dispatch = useAppDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='logout' onPress={() => {dispatch(logout())}}/>
    </View>
  )
}
