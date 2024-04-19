import { NavLink } from "react-router-dom"

function Home() {
  return (
    <>
        <div className="container mx-auto w-96">
            <div className="bg-white mt-48">
                    <div className="flex flex-col items-center py-5 gap-10">
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Home