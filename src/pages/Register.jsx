import { IoMoonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import userIcon from '../assets/user.svg'
import googleIcon from '../assets/googleIcon.svg'
import sms from '../assets/sms.svg'
import lock from '../assets/lock.svg'
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container mx-auto w-2/6">
          <div className="flex flex-col gap-5 mt-5 mb-5 bg-white py-4 px-6 rounded-lg">
            <div className='flex justify-between items-center'>
              <span></span>
              <h1 className="text-center font-bold text-4xl">Let's go!</h1>
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
              <label htmlFor="email">Email</label>
              <div className="flex gap-2 border rounded-lg py-3 px-3 mt-2">
                <img src={sms} alt="" />
                <input className="w-96 outline-none bg-transparent" type="email" placeholder="example@site.com" />
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
          
            <div className="flex flex-col">
              <label htmlFor="name">Confirm Password</label>
              <div className="flex gap-2 items-center border rounded-lg py-3 px-3 mt-2">
                <img src={lock} alt="" />
                <input className="w-96 outline-none bg-transparent" type="password" placeholder="Confirm Password" />
                <FaRegEye className="text-2xl cursor-pointer opacity-50" />
              </div>
            </div>

            <button className='signup text-white rounded-lg p-4 mt-5 mb-3 font-bold'>Sign Up</button>

            <div className="flex flex-col items-center gap-4">
              <button className="google flex justify-center rounded-lg border py-3 w-full items-center gap-3">
                <img src={googleIcon} alt="" />
                <span className="tetx-white">Sign Up with Google</span>
              </button>

              <NavLink to='/login'>or login with SSO</NavLink>
            </div>

            <div className="border-t-2 border-gray-300">
              <p className='text-center mt-2 text-gray-500' style={{fontSize: '11px'}}>By lobby the button above, you agree to our <NavLink className="underline">Terms of Service</NavLink> and <NavLink className="underline">Privacy Policy</NavLink>.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Register