import { useState } from 'react'
import type { ReactNode } from 'react'
import { CssBaseline, type PaletteMode } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createAppTheme } from './theme'
import { ThemeModeContext } from './ThemeModeContext'

// 3. AppThemeProvider가 받을 props 타입
interface AppThemeProviderProps {
  children: ReactNode
}

// 4. 실제 Provider 컴포넌트
function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>('light')

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createAppTheme(mode)

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default AppThemeProvider