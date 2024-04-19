import { IoMoonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import userIcon from '../assets/user.svg'
import googleIcon from '../assets/googleIcon.svg'
import lock from '../assets/lock.svg'
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container mx-auto w-1/1">
          <div className="flex flex-col gap-5 mt-8 bg-white py-4 px-6 rounded-lg w-[400px]">
            <div className='flex justify-between items-center'>
              <span></span>
              <h1 className="text-center font-bold text-3xl">Welcome back!</h1>
              <IoMoonOutline className="cursor-pointer text-2xl" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Full Name</label>
              <div className="flex gap-2 border rounded-lg py-2 px-3 mt-2">
                <img src={userIcon} alt="" />
                <input className="w-96 outline-none bg-transparent" type="text" placeholder="John Doe" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name">Choose Password</label>
              <div className="flex gap-2 border rounded-lg py-3 px-3 mt-2">
                <img src={lock} alt="" />
                <input className="w-96 outline-none bg-transparent" type="password" placeholder="Minimum 8 characters" />
                <FaRegEye className="text-2xl cursor-pointer opacity-50" />
              </div>
            </div>

            <div className="flex justify-between">
                <span></span>
                <NavLink to='/forgotPassword'>Forgot Password?</NavLink>
            </div>

            <button className='signup text-white rounded-lg p-4 mb-3 font-bold'>Sign In</button>

            <div className="flex flex-col items-center gap-4 mb-5">
              <button className="google flex justify-center rounded-lg border py-3 w-full items-center gap-3">
                <img src={googleIcon} alt="" />
                <span className="tetx-white">Sign Up with Google</span>
              </button>

              <NavLink to='/register'>or register with SSO</NavLink>
            </div>
          </div>
      </div>
    </>
  )
}

export default Login