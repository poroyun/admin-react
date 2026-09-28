import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import { CssBaseline, type PaletteMode } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createAppTheme } from './theme'

// 1. Context로 공유할 값의 타입
interface ThemeModeContextValue {
  mode: PaletteMode
  toggleMode: () => void
}

// 2. Context 생성
export const ThemeModeContext = 
  createContext<ThemeModeContextValue | undefined>(undefined)

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