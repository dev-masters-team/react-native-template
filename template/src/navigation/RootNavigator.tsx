import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BootSplash from 'react-native-bootsplash'
import { useSelector } from 'react-redux'

import TemplateScreen from '../screens/Template'
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

  const jwt = useAppSelector((state) => state.auth.jwt)

  return (
      <NavigationContainer onReady={BootSplash.hide}>
        <RootStack.Navigator>
          {!jwt ? (
            <RootStack.Screen
              name="WelcomeNavigator"
              component={WelcomeNavigator}
            />
          ) : (
            <RootStack.Group>
              <RootStack.Screen name="Home" component={HomeBottomNavigator} />
              <RootStack.Screen name="AnotherComponent" component={TemplateScreen} />
            </RootStack.Group>
          )}
          <RootStack.Group navigationKey={jwt ? 'user' : 'guest'}>
            <RootStack.Screen name="Help" component={TemplateScreen} />
            <RootStack.Screen name="About" component={TemplateScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
  )
}
