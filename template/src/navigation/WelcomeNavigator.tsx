import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignIn from '../screens/Welcome/SignIn'
import SignUp from '../screens/Welcome/SignUp'
import { useThemeContext } from '@theme/ThemeProvider'
import { NavigationProp } from '@react-navigation/native'
import { StyleProp, TextStyle, View } from 'react-native'
import LogoHeader from './LogoHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

export type AppEntranceParamList = {
  // Welcome: undefined
  SignIn: { name: string }
  SignUp: undefined
  // ForgotPassword: undefined
}

const AppEntranceStack = createNativeStackNavigator<AppEntranceParamList>()

export default function WelcomeNavigator() {
  const { theme } = useThemeContext()
  return (
    <SafeAreaView style={[{ flex: 1 }, theme.primaryBackground]}>
      <AppEntranceStack.Navigator initialRouteName="SignIn">
        <AppEntranceStack.Group screenOptions={{ header: () => <LogoHeader /> }}>
          <AppEntranceStack.Screen
            name="SignIn"
            component={SignIn} /* options={{headerShown: false}} */
          />
          {/* Other screens with logo header */}
        </AppEntranceStack.Group>
        <AppEntranceStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Create an account',
            headerTitleStyle: theme.typography.h2 as StyleProp<
              Pick<TextStyle, 'fontSize' | 'fontFamily' | 'fontWeight'> & {
                color?: string
              }
            >,
            headerTransparent: true,
            headerTintColor: theme.colors.default,
          }}
        />
      </AppEntranceStack.Navigator>
    </SafeAreaView>
  )
}
