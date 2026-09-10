import type { User } from '@/types/user'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>아이디</th>
          <th>이메일</th>
          <th>생년월일</th>
          <th>입사일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.userId}</td>
            <td>{user.email}</td>
            <td>{user.birthDate}</td>
            <td>{user.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList