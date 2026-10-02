import type { Code } from '@/types/code'
import { Box, TextField, Typography } from '@mui/material'

interface CodeFormProps {
  code: Code | undefined
}

function CodeForm({ code }: CodeFormProps) {
  return (
    <Box
      className="rounded-2xl p-6"
      sx={{
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography
        variant='h6' sx={{ mb: 2 }}
      >코드 상세</Typography>

      <Box className="flex flex-col gap-6">
        <TextField
          label="코드"
          value={code?.code ?? ''}
          fullWidth
        />

        <TextField
          label="코드명"
          value={code?.name ?? ''}
          fullWidth
        />

        <TextField
          label="설명"
          value={code?.description ?? ''}
          fullWidth
        />
      </Box>
    </Box>
  )
}

export default CodeForm