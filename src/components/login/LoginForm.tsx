import { Lock, User, Users } from 'lucide-react'

interface LoginFormProps {
  userId: string
  password: string
  onUserIdChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onLogin: () => void
}

function LoginForm({
  userId,
  password,
  onUserIdChange,
  onPasswordChange,
  onLogin
}: LoginFormProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-blue-100/50">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500 shadow-md shadow-blue-100/60 ring-1 ring-inset ring-blue-100/50">
            <span className="flex items-center justify-center"><Users strokeWidth={2.2} /></span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">Admin</h1>

          <p className="mt-2 text-sm text-slate-500">
            관리자 계정으로 로그인하세요.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="userId"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              아이디
            </label>

            <div className="relative">
              <User aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => onUserIdChange(e.target.value)}
                placeholder="아이디를 입력하세요."
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              비밀번호
            </label>

            <div className="relative">
              <Lock aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="비밀번호를 입력하세요."
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

          </div>

          <button
            type="button"
            onClick={onLogin}
            className="w-full cursor-pointer rounded-xl bg-blue-500 py-3 font-semibold text-white shadow-md transition-colors hover:bg-blue-600"
          >
            로그인
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default LoginForm
