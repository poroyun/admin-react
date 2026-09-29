import { createTheme } from "@mui/material/styles";
import { deepPurple } from '@mui/material/colors'
import type { PaletteMode } from "@mui/material";

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: deepPurple[500],
      },
      ...(mode === 'light' && {
        background: {
          default: '#f8f7fc',
        },
      }),
    }
  })