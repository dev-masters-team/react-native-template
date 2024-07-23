import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Template from '../screens/Template'
import SignIn from '../screens/Welcome/SignIn'

export type AppEntranceParamList = {
  // Welcome: undefined
  SignIn: {name: string}
  SignUp: {name: string}
  // ForgotPassword: undefined
}

const AppEntranceStack = createNativeStackNavigator<AppEntranceParamList>()

export default function WelcomeNavigator() {
  return (
    <AppEntranceStack.Navigator initialRouteName="SignIn">
      <AppEntranceStack.Screen
        name="SignIn"
        component={SignIn}
      />
      <AppEntranceStack.Screen
        name="SignUp"
        component={Template}
      />
    </AppEntranceStack.Navigator>
  )
}
