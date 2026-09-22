import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserApi, updateUserApi } from '@/api/userApi'
import UserForm from '@/components/users/UserForm'
import PageHeader from '@/components/common/page-header/PageHeader'
import AppAlert from '@/components/common/alert/AppAlert'

function UserDetail() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [joinDate, setJoinDate] = useState('')
  const [alertOpen, setAlertOpen] = useState(false)

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
      joinDate,
    })
    setAlertOpen(true)
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
    <div className="min-h-screen">
      <div className="mx-auto w-full">
        
        <PageHeader
          title="사용자 상세"
          description="사용자 정보를 확인하고 수정합니다."
        />

        {alertOpen && (
          <div className="mb-6">
            <AppAlert
              message='사용자 정보가 수정되었습니다.'
              severity='success'
              onClose={() => {
                setAlertOpen(false)
                // navigate('/admin/users')
              }}
            />
          </div>
        )}

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
// 각 사용자 정보를 state에 저장
//   ↓
// UserForm에 props로 전달
