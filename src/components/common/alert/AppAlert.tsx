import { Alert } from "@mui/material";

interface AppAlertProps {
  message: string
  severity: 'success' | 'error' | 'warning' | 'info'
  onClose?: () => void
}

function AppAlert({
  message,
  severity,
  onClose
}: AppAlertProps) {
  return (
    <Alert
      severity={severity}
      onClose={onClose}
    >
      {message}
    </Alert>
  )
}

export default AppAlert