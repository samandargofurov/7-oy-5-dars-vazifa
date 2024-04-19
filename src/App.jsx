import { Route, Routes } from 'react-router-dom'
import Reagister from './pages/Reagister'
import Login from './pages/Login'


function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Reagister></Reagister>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App