import { createContext } from 'react'
import type { PaletteMode } from '@mui/material'

// 1. Context로 공유할 값의 타입
interface ThemeModeContextValue {
  mode: PaletteMode
  toggleMode: () => void
}

// 2. Context 생성
export const ThemeModeContext =
  createContext<ThemeModeContextValue | undefined>(undefined)