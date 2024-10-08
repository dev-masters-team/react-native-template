import React, { useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import Pug from '../../assets/images/pug.svg'
import Icon from 'react-native-vector-icons/FontAwesome'
import LongPressWithScale from '../utils/components/LongPressWithScale'
import Toast from 'react-native-toast-message'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../utils/theme/ThemeProvider'
import { useAppSelector } from '../utils/hooks/reduxHooks'
import Config from 'react-native-config'
import { Input } from '@custom-ui'
import { useClickOutside } from 'react-native-click-outside'
export interface TemplateProps {
  name?: string
}
export default function Template({ name }: TemplateProps) {
  const { t } = useTranslation('namespace')
  const { themeId } = useAppSelector((state) => state.app)

  const { theme } = useThemeContext()
  // useEffect(() => {
  //   console.log('theme.secondaryBackground:', theme.secondaryBackground)
  // }, [theme])
  const outsideHandlerRef = useClickOutside<View>(() => {
    console.log('presed outside of a view')
  })
  return (
    <View style={[styles.container, theme.primaryBackground]}>
      <LongPressWithScale
        onLongPress={() =>
          Toast.show({
            type: 'success',
            text1: t('Гав'),
            text2: t('Я собака бобака'),
          })
        }
      >
        <View
          style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Pug />
        </View>
      </LongPressWithScale>
      <View ref={outsideHandlerRef}>
        <Icon name="rocket" size={30} color="#900" />
      </View>
      <Text>Template screen {name}</Text>
      <Text>env (APP_SCHEMA_EXAMPLE) - {Config.APP_SCHEMA_EXAMPLE}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
