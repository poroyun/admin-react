import { useState } from "react";
import UserForm from "@/components/users/UserForm";
import { createUserApi } from "@/api/userApi";
import { useNavigate } from "react-router-dom";

function UserCreate() {
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
    await createUserApi({
      name,
      userId,
      email,
      birthDate,
      joinDate
    })
    navigate('/admin/users')
  }

  return(
    <div>
      <div>
        <h1>사용자 등록</h1>
        <p>새로운 사용자 정보를 등록합니다.</p>
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
        submitLabel="등록"
      />
    </div>
  )
}

export default UserCreate