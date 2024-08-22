import { Formik } from 'formik'
import { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as yup from 'yup'

import { useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { WebsocketConnectionContext } from '../../utils/WebSocketConnectionContext'
import { useThemeContext } from '@theme/ThemeProvider'
import WelcomeLayoutWrapper from '../Welcome/WelcomeLayoutWrapper'
import { Button, Input } from '@custom-ui'
import Toast from 'react-native-toast-message'
import { inMaintenanceNotification } from '../../../dev-tools/maintenance'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppEntranceParamList } from '../../navigation/WelcomeNavigator'

export default function SignUp() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const navigation = useNavigation<NavigationProp<AppEntranceParamList>>()

  return (
    <WelcomeLayoutWrapper>
      <Button
        title="I have a contract with MusicTMM"
        onPress={inMaintenanceNotification}
      />
      <Button
        title="I don't have a contract with MusicTMM"
        onPress={inMaintenanceNotification}
        type="outlined"
      />
    </WelcomeLayoutWrapper>
  )
}

const styles = StyleSheet.create({
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
})
