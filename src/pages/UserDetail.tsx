import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserApi, updateUserApi } from '@/api/userApi'
import UserForm from '@/components/users/UserForm'

function UserDetail() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [joinDate, setJoinDate] = useState('')

  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/admin/users')
  }

  const handleSubmit = async () => {
    if (!id) {
      return
    }

    await updateUserApi(id, {
      name,
      email,
      birthDate,
      joinDate
    })
    alert('사용자 정보가 수정되었습니다.')
    navigate('/admin/users')
  }

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        return
      }

      const data = await getUserApi(id)
      setName(data.name)
      setUserId(data.userId)
      setEmail(data.email)
      setBirthDate(data.birthDate)
      setJoinDate(data.joinDate)
    }

    fetchUser()
  }, [id])

  return (
    <div>
      <div>
        <div>
          <h1>
            사용자 상세
          </h1>
        </div>

        <UserForm
          name={name}
          userId={userId}
          email={email}
          birthDate={birthDate}
          joinDate={joinDate}
          onNameChange={setName}
          onUserIdChange={setUserId}
          onEmailChange={setEmail}
          onBirthDateChange={setBirthDate}
          onJoinDateChange={setJoinDate}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          submitLabel="수정"
          isEdit={true}
        />

      </div>
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
