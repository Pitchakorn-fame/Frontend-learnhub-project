import React from 'react'
import logo from '../assets/atom.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout, username } = useAuth()
  return (
    <div className="flex justify-between px-4 h-16 items-center">
      <Link to={'/'} className="flex items-center">
        <img src={logo} alt="Atom logo" className="w-auto h-16" />
        <p className="font-medium text-3xl">LearnHub</p>
      </Link>

      {isLoggedIn ? (
        <div className="flex gap-5 font-medium text-white">
          <p>Welcome </p> {username}
          <Link to="/" onClick={logout} className="rounded-2xl bg-[#4CAF50] py-2 px-5 ">
            Logout
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 font-medium text-white">
          <Link to="/login" className="rounded-2xl bg-[#4CAF50] py-2 px-7 ">
            Login
          </Link>
          <Link to="/register" className="rounded-2xl bg-[#4CAF50] py-2 px-5">
            Register
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
