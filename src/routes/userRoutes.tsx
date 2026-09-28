import Users from '@/pages/Users'
import UserCreate from '@/pages/UserCreate'
import UserDetail from '@/pages/UserDetail'

export const userRountes = [
  {
    path: 'users',
    element: <Users />,
  },
  {
    path: 'users/new',
    element: <UserCreate />,
  },
  {
    path: 'users/:id',
    element: <UserDetail />,
  },
]