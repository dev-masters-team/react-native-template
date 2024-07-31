import { ReactNode, createContext, useContext } from 'react'
import { ThemeInterface, useThemeChangeListener } from './useThemeChangeListener'
import { baseStyle } from './themes/baseStyle'
import { lightStyle } from './themes/lightTheme'
import _ from 'lodash'

interface ThemeContextProps {
  theme: ThemeInterface
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: _.merge({}, baseStyle, lightStyle),
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useThemeChangeListener()
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
