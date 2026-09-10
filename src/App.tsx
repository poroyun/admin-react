import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        {/* login or admin을 제외한 주소로 진입 시 login 페이지로 이동됨 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App