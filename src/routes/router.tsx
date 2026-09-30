import { createBrowserRouter } from "react-router-dom";
import Admin from "@/pages/Admin";
import AdminLayout from "@/components/admin/AdminLayout";
import { authRoutes } from "./authRoutes";
import { userRountes } from "./userRoutes";
import NotFoundRedirect from "./notFoundRedirect";

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
    element: <NotFoundRedirect />,
  },
  // 잘못된 주소로 진입 시, 로그인 여부에 따라 login or admin 페이지로 이동됨
])