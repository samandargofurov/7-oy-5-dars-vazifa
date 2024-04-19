import userIcon from '../assets/user.svg'
import sms from '../assets/sms.svg'
import lock from '../assets/lock.svg'

function Register() {
  return (
    <>
      <div className="container mx-auto w-96">
        <h1 className="text-center text-4xl">Let's go!</h1>
        
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="name">Full Name</label>
          <div className="flex gap-2 border px-3 py-2 rounded-lg">
            <img src={userIcon} alt="" />
            <input className="outline-none" type="text" placeholder="John Doe" id="name" />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="email">Email</label>
          <div className="flex gap-2 border px-3 py-2 rounded-lg">
            <img src={sms} alt="" />
            <input className="outline-none" type="email" placeholder="example@site.com" id="email" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lock">Choose Password</label>
          <div className="flex gap-2 border px-3 py-2 rounded-lg">
            <img src={lock} alt="" />
            <input className="outline-none" type="password" placeholder="Minimum 8 characters" id="lock" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register