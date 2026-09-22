import { useNavigate } from 'react-router-dom'
import type { User } from '@/types/user'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  const navigate = useNavigate()

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
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
    </div>
  )
}

export default UserList
