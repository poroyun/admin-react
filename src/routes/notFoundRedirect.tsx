import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '@/store/store'

function NotFoundRedirect() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn,
  )

  return (
    <Navigate
      to={isLoggedIn ? '/admin' : '/login'}
      replace
    />
  )
}

export default NotFoundRedirect