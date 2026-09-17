import { useLocation, useNavigate } from "react-router-dom"


function AdminSidebar() {

  const navigate = useNavigate()
  const location = useLocation()

  const isUsersActive = location.pathname.startsWith('/admin/users')
  return (
    <aside className="min-h-screen w-50 shrink-0 border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <h1 className="text-xl font-bold">Admin</h1>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <button
          className={`h-10 rounded-md px-3 text-left ${
            isUsersActive
              ? 'bg-slate-100 font-semibold'
              : 'hover:bg-slate-50'
          }`}
          onClick={() => navigate('/admin/users')}
        >
          사용자 관리
        </button>

        <button className="h-10 rounded-md px-3 text-left">
          코드 관리
        </button>
      </nav>
    </aside>
  )
}

export default AdminSidebar