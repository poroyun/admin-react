import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUsersApi } from '@/api/userApi'
import UserList from '@/components/users/UserList'
import type { User } from '@/types/user'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              사용자 관리
            </h1>
            <p className="text-sm leading-relaxed text-slate-500">
              등록된 사용자를 조회하고 관리합니다.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/admin/users/new')}
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-violet-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          >
            사용자 등록
          </button>
        </div>

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
