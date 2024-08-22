import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BootSplash from 'react-native-bootsplash'
import Template from '../screens/Template'
import { useAppSelector } from '../utils/hooks/reduxHooks'
import WelcomeNavigator from './WelcomeNavigator'
import HomeBottomNavigator from './HomeBottomNavigator'

export type RootParamList = {
  WelcomeNavigator: undefined
  AnotherComponent: undefined
  Home: undefined
  Help: undefined
  About: undefined
}

export type RootNavigation = NavigationProp<RootParamList>
const RootStack = createNativeStackNavigator<RootParamList>()

export default function RootNavigator(): React.JSX.Element {
  const user = useAppSelector((state) => state.auth.jwt)

  return (
    /* Do not forget to add SafeArea to new screens */
    <NavigationContainer onReady={BootSplash.hide}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user ? (
          <RootStack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeBottomNavigator} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
