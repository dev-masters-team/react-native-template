import { Formik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'
import Config from 'react-native-config'
import { useThemeContext } from '@theme/ThemeProvider'
import WelcomeLayoutWrapper from '../Welcome/WelcomeLayoutWrapper'
import { Button, Input } from '@custom-ui'
import Toast from 'react-native-toast-message'
import { inMaintenanceNotification } from '../../../dev-tools/maintenance'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppEntranceParamList } from '../../navigation/WelcomeNavigator'
import { useDev } from '../../../dev-tools/useDev'
import { useAppDispatch } from '@utils/hooks/reduxHooks'
import { attemptAuth } from '../../redux/auth/authSlice'

export default function SignIn() {
  const { t } = useTranslation(['auth', 'common'])
  const { theme } = useThemeContext()
  const navigation = useNavigation<NavigationProp<AppEntranceParamList>>()

  const [error, setError] = useState<
    'ERROR_USER_NOT_FOUND' | 'ERROR_INVALID_CREDENTIALS' | 'UNKNOWN_ERROR' | undefined
  >()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('The format of the email does not comply')
      .required('Please input your email'),
    password: yup.string().required('Please input your password'),
  })

  const clearCredentialsError = () => {
    setError(undefined)
  }

  const dispatch = useAppDispatch()

  return (
    <WelcomeLayoutWrapper>
      <Formik
        initialValues={{
          email: Config.DEV_CREDENTIALS_EMAIL || '',
          password: Config.DEV_CREDENTIALS_PASSWORD || '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          dispatch(attemptAuth({ email: values.email, password: values.password }))
        }}
      >
        {({
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <View style={styles.inputsContainer}>
              <View>
                <Input
                  prefixIconName="mail-outline"
                  autoCapitalize="none"
                  onChangeText={(value) => setFieldValue('email', value)}
                  onBlur={handleBlur('email')}
                  // value={values.email}
                  placeholder={t('Email')}
                  autoComplete="email"
                  inputMode="email"
                  keyboardType="email-address"
                />

                {touched.email && errors.email && (
                  <Text style={theme.typography.danger}>{t(errors.email)}</Text>
                )}
              </View>
              <View>
                <Input
                  prefixIconName="bag-remove-outline"
                  onTextInput={clearCredentialsError}
                  autoCapitalize="none"
                  onChangeText={(value) => setFieldValue('password', value)}
                  onBlur={handleBlur('password')}
                  // value={values.password}
                  placeholder={t('Password')}
                  textContentType="password"
                  suffix
                  autoComplete="current-password"
                />

                {touched.password && errors.password && (
                  <Text style={theme.typography.danger}>{t(errors.password)}</Text>
                )}
              </View>
              <Button
                title="Forgot password?"
                onPress={inMaintenanceNotification}
                type="text"
              />
            </View>

            <View style={styles.footer}>
              <Button title="Log in" onPress={handleSubmit} /* type='outlined' */ />
            </View>
          </>
        )}
      </Formik>
    </WelcomeLayoutWrapper>
  )
}

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
})
