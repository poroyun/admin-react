import { List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import PeopleIcon from '@mui/icons-material/People'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

function AdminSidebar() {

  const navigate = useNavigate()
  const location = useLocation()

  const isUsersActive = location.pathname.startsWith('/admin/users')
  return (
    <aside className="min-h-screen w-50 shrink-0 border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <h1 className="text-xl font-bold">Admin</h1>
      </div>

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
          
          <ListItemButton sx={{borderRadius: 1}}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="코드 관리" />
          </ListItemButton>
        </List>
      </nav>
    </aside>
  )
}

export default AdminSidebar