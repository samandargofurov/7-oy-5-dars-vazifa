import { NavLink } from "react-router-dom"


function Login() {
  return (
    <>
      <h1>Login</h1>
      <NavLink to='/register'>come back to register</NavLink>
    </>
  )
}

export default Login