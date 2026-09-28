import { createBrowserRouter, Navigate } from "react-router-dom";
import Admin from "@/pages/Admin";
import AdminLayout from "@/components/admin/AdminLayout";
import { authRoutes } from "./authRoutes";
import { userRountes } from "./userRoutes";

export const router = createBrowserRouter([
  ...authRoutes,

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      ...userRountes
    ],
  },
  {
    path: '*',
    element: <Navigate to='/login' replace />,
  },
  // login or admin을 제외한 주소로 진입 시 login 페이지로 이동됨
])