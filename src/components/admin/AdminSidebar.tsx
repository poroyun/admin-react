import { List, ListItemButton, ListItemText, ListItemIcon, Box } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import PeopleIcon from '@mui/icons-material/People'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

function AdminSidebar() {

  const navigate = useNavigate()
  const location = useLocation()

  const isUsersActive = location.pathname.startsWith('/admin/users')
  const isCodesActive = location.pathname.startsWith('/admin/codes')
  return (
    <Box
      component="aside"
      className="min-h-screen w-50 shrink-0"
      sx={{
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Box
        className="flex h-16 items-center px-6"
        sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <h1 className="text-xl font-bold">Admin</h1>
      </Box>

      <nav className="p-4">
        <List
          disablePadding
          sx={{
            display: "flex",
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          <ListItemButton
            selected={isUsersActive}
            onClick={() => navigate('/admin/users')}
            sx={{borderRadius: 1}}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="사용자 관리" />
          </ListItemButton>
          
          <ListItemButton
            selected={isCodesActive}
            onClick={() => navigate('/admin/codes')}
            sx={{borderRadius: 1}}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="코드 관리" />
          </ListItemButton>
        </List>
      </nav>
    </Box>
  )
}

export default AdminSidebar