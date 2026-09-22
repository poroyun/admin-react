import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsersApi } from '@/api/userApi'
import UserList from '@/components/users/UserList'
import type { User } from '@/types/user'
import { Button } from '@mui/material'
import PageHeader from '@/components/common/page-header/PageHeader'
import PageHeaderRight from '@/components/common/page-header/PageHeaderRight'

function Users() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsersApi()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full">
        <PageHeader
          title="사용자 관리"
          description="등록된 사용자를 조회하고 관리합니다."
        >
          <PageHeaderRight>
            <Button
              variant="contained"
              size="small"
              type="button"
              onClick={() => navigate('/admin/users/new')}
            >
              사용자 등록
            </Button>
          </PageHeaderRight>
        </PageHeader>

        <UserList users={users} />
      </div>
    </div>
  )
}

export default Users

// [사용자 목록]
// db.json
//   ↓
// json-server
//   ↓
// getUsersApi()
//   ↓
// Users.tsx
//   ↓
// useState<User[]>
//   ↓
// <UserList users={users} />
//   ↓
// users.map()
//   ↓
// 사용자 목록 출력