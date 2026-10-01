import { useNavigate } from 'react-router-dom'
import type { User } from '@/types/user'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  const navigate = useNavigate()

  return (
    <Box
      className="overflow-hidden"
      sx={{
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>이름</TableCell>
              <TableCell align='center'>아이디</TableCell>
              <TableCell align='center'>이메일</TableCell>
              <TableCell align='center'>생년월일</TableCell>
              <TableCell align='center'>입사일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => navigate(`/admin/users/${user.id}`)}
                sx={{ cursor: 'pointer' }}
                hover
              >
                <TableCell align='center'>{user.name}</TableCell>
                <TableCell align='center'>{user.userId}</TableCell>
                <TableCell align='center'>{user.email}</TableCell>
                <TableCell align='center'>{user.birthDate}</TableCell>
                <TableCell align='center'>{user.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserList
