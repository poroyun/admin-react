import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserApi } from '@/api/userApi'
import type { User } from '@/types/user'

function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        return
      }

      const data = await getUserApi(id)
      setUser(data)
    }

    fetchUser()
  }, [id])

  return (
    <div>
      <h1>사용자 상세</h1>

      <div>
        <dl>
          <dt>이름</dt>
          <dd>{user?.name}</dd>
        </dl>
        <dl>
          <dt>아이디</dt>
          <dd>{user?.userId}</dd>
        </dl>
        <dl>
          <dt>이메일</dt>
          <dd>{user?.email}</dd>
        </dl>
        <dl>
          <dt>생년월일</dt>
          <dd>{user?.birthDate}</dd>
        </dl>
        <dl>
          <dt>입사일</dt>
          <dd>{user?.joinDate}</dd>
        </dl>
      </div>
      {/* <p>이름: {user?.name}</p>
      <p>아이디: {user?.userId}</p>
      <p>이메일: {user?.email}</p>
      <p>생년월일: {user?.birthDate}</p>
      <p>입사일: {user?.joinDate}</p> */}
    </div>
  )
}

export default UserDetail

// [사용자 상세]
// 목록 행 클릭
//   ↓
// navigate(`/admin/users/${user.id}`)
//   ↓
// /admin/users/:id
//   ↓
// useParams()
//   ↓
// id 추출
//   ↓
// getUserApi(id)
//   ↓
// 사용자 한 명 조회
//   ↓
// useState<User | null>
//   ↓
// 상세 정보 출력