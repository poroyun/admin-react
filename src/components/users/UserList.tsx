import { useNavigate } from 'react-router-dom'
import type { User } from '@/types/user'

interface UserListProps {
  users: User[]
}

function UserList({ users }: UserListProps) {
  const navigate = useNavigate()

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-center text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-semibold"
              >
                이름
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-semibold"
              >
                아이디
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-semibold"
              >
                이메일
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-semibold"
              >
                생년월일
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-6 py-4 font-semibold"
              >
                입사일
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {users.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer transition-colors hover:bg-violet-50/60"
                onClick={() => navigate(`/admin/users/${user.id}`)}
              >
                <td className="whitespace-nowrap px-6 py-5 font-semibold text-slate-900">
                  {user.name}
                </td>
                <td className="px-6 py-5">{user.userId}</td>
                <td className="px-6 py-5">{user.email}</td>
                <td className="px-6 py-5">{user.birthDate}</td>
                <td className="px-6 py-5">{user.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
