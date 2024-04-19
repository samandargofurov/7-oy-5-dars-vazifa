import { IoMoonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import googleIcon from '../assets/googleIcon.svg'
import lock from '../assets/lock.svg'
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <div className="container mx-auto w-2/6">
          <div className="flex flex-col gap-5 mt-8 bg-white py-4 px-6 rounded-lg">
            <div className='flex justify-between items-center'>
              <span></span>
              <h1 className="text-center font-bold text-3xl">Edit Password</h1>
              <IoMoonOutline className="cursor-pointer text-2xl" />
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

            <button className='signup text-white rounded-lg p-4 mb-3 font-bold'>Save</button>

            <div className="border-t-2 border-gray-300">
              <p className='text-center mt-2 text-gray-500' style={{fontSize: '11px'}}>By lobby the button above, you agree to our <NavLink className="underline">Terms of Service</NavLink> and <NavLink className="underline">Privacy Policy</NavLink>.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default ForgotPassword