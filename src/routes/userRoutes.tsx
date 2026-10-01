import Users from '@/pages/Users'
import UserCreate from '@/pages/UserCreate'
import UserDetail from '@/pages/UserDetail'

export const userRoutes = [
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