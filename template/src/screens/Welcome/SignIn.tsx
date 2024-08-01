/*
* TODO: [Disclaimer] review and refactor this component before usage
* setFieldError, styles, theming, translating, etc....
*/
import { useEffect, useState } from 'react'
import {
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import Config from 'react-native-config'
import { useTranslation } from 'react-i18next'
import IoniconsIcons from 'react-native-vector-icons/Ionicons'

import _ from 'lodash'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { useThemeContext } from '../../utils/theme/ThemeProvider'
import { attemptAuth } from '../../redux/auth/authSlice'
import WelcomeLayoutWrapper from '../Welcome/WelcomeLayoutWrapper'
export default function SignIn() {
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['auth', 'common'])
  
  const { theme } = useThemeContext()

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

  const [isPwdVisible, setIsPwdVisible] = useState<boolean>(false)
  return (
    <WelcomeLayoutWrapper>
      <Formik
        initialValues={{
          email: Config.DEV_CREDENTIALS_EMAIL || '',
          password: Config.DEV_CREDENTIALS_PASSWORD || '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setFieldError }) => {
          try {
            await dispatch(
              attemptAuth({
                email: values.email,
                password: values.password,
              }),
            ).unwrap()
          } catch (e: any) {
            if (e.message === 'INVALID_CREDENTIALS') {
              setError('ERROR_INVALID_CREDENTIALS')
            } else {
              setError('UNKNOWN_ERROR')
            }
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={t('Email')}
                autoComplete="email"
                inputMode="email"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.default.color}
                style={[
                  // theme.ui.textInput,
                  // touched.email && errors.email ? theme.ui.textInputErrorText : null,
                ]}
              />
              {touched.email && errors.email && (
                <Text style={theme.typography.danger}>{t(errors.email)}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <View
                style={[
                  // theme.ui.textInput,
                  styles.passwordInputContainer,
                  // touched.password && errors.password
                  //   ? theme.ui.textInputErrorText
                  //   : null,
                ]}
              >
                <TextInput
                  onTextInput={clearCredentialsError}
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder={t('Password')}
                  // placeholderTextColor={theme.ui.placeholderTextColor.color}
                  secureTextEntry={!isPwdVisible}
                  autoComplete="current-password"
                  // style={theme.passwordInput}
                />
                <IoniconsIcons
                  name={isPwdVisible ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  // color={theme.ui.placeholderTextColor.color}
                  onPress={() => setIsPwdVisible(!isPwdVisible)}
                />
              </View>

              {touched.password && errors.password && (
                <Text style={theme.typography.danger}>{t(errors.password)}</Text>
              )}
            </View>

            {error && !errors.password && (
              <Text style={theme.typography.danger}>{t(error)}</Text>
            )}

            <TouchableOpacity
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              style={[{backgroundColor: 'lightblue'}, styles.buttonMargin]}
            >
              <Text /* style={theme.buttonTitle} */>{t('Log in')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </WelcomeLayoutWrapper>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    padding: 20,
  },
  buttonMargin: {
    marginTop: 20,
  },
  secureAccess: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //Check on ios and android
    // paddingVertical:0,
    // paddingLeft:10,
  },
})
