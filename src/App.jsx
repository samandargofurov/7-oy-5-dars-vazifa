import { Route, Routes } from "react-router-dom"
import Register from './pages/Register'
import { Login } from "./pages/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App