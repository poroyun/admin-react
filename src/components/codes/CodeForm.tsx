import type { Code } from '@/types/code'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface CodeFormProps {
  code: Code | undefined
  codes: Code[]
  onSave: (data: Partial<Code>) => void
}

function CodeForm({ code, codes, onSave }: CodeFormProps) {
  const [codeValue, setCodeValue] = useState(code?.code ?? '')
  const [codeName, setCodeName] = useState(code?.name ?? '')
  const [codeDescription, setCodeDescription] = useState(code?.description ?? '')
  const [codeParentId, setCodeParentId] = useState(code?.parentId ?? '')
  
  const parentCodes = codes.filter(
    (item) => item.parentId === null,
  )

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
          select
          label="상위코드"
          value={codeParentId}
          onChange={(event) => {
            setCodeParentId(event.target.value)
          }}
          fullWidth
        >
          {parentCodes.map((parentCode) => (
            <MenuItem
              key={parentCode.id}
              value={parentCode.id}
            >{parentCode.name}</MenuItem>
          ))}
        </TextField>

        <TextField
          label="코드"
          value={codeValue}
          onChange={(event) => {
            setCodeValue(event.target.value)
          }}
          fullWidth
        />

        <TextField
          label="코드명"
          value={codeName}
          onChange={(event) => {
            setCodeName(event.target.value)
          }}
          fullWidth
        />

        <TextField
          label="설명"
          value={codeDescription}
          onChange={(event) => {
            setCodeDescription(event.target.value)
          }}
          fullWidth
        />
        
        <Button
          variant='contained'
          onClick={() => {
            onSave({
              code: codeValue,
              name: codeName,
              description: codeDescription,
              parentId: codeParentId || null,
            })
          }}
        >저장</Button>
      </Box>
    </Box>
  )
}

export default CodeForm