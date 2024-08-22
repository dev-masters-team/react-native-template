import React from 'react'
import './src/utils/i18n/i18n'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store'
import RootNavigator from './src/navigation/RootNavigator'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider, useThemeContext } from './src/utils/theme/ThemeProvider'
import Toast from 'react-native-toast-message'
import { toastThemeConfig } from '@theme/toastThemeConfig'
import { ClickOutsideProvider } from 'react-native-click-outside'

// import 'react-native-get-random-values'

export default function App() {
  //app orientation has been temporary locked, see how: https://stackoverflow.com/questions/32176548/how-to-disable-rotation-in-react-native
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ClickOutsideProvider>
            <ThemeProvider>
              <ThemedApp />
            </ThemeProvider>
          </ClickOutsideProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </StoreProvider>
  )
}

function ThemedApp() {
  const { theme } = useThemeContext()
  return (
    <SafeAreaProvider>
      <RootNavigator />

      <Toast config={toastThemeConfig(theme)} />
    </SafeAreaProvider>
  )
}
