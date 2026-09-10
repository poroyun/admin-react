import { useEffect, useState } from 'react'
import { getUsersApi } from '@/api/userApi'
import UserList from '@/components/users/UserList'
import type { User } from '@/types/user'

function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsersApi()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>사용자 관리</h1>
      <p>등록된 사용자를 조회하고 관리합니다.</p>

      <UserList users={users} />
    </div>
  )
}

export default Users