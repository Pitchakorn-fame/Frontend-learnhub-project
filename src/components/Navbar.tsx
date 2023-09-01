import logo from '../assets/atom.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import useContentList from '../hooks/useContentList'
import Loading from './Loading'

const Navbar = () => {
  const { isLoggedIn, logout, username } = useAuth()
  console.log(username)
  const { contentList, isLoading, error } = useContentList()

  if (isLoading || !contentList) return <Loading />
  if (error) return <p>{error}</p>
  return (
    <div className="flex justify-between px-10 h-16 items-center">
      <Link to={'/'} className="flex items-center">
        <img src={logo} alt="Atom logo" className="w-auto h-16" />
        <p className="font-medium text-3xl">LearnHub</p>
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center gap-8 font-medium">
          <div className="flex text-black gap-2">
            <p>Welcome</p>
            <p className="font-bold text-[#A50113]"> {username}</p>
          </div>
          <Link
            to="/"
            onClick={logout}
            className="flex items-center text-white rounded-2xl bg-[#000000] py-2 px-4 hover:bg-white hover:text-black h-full w-auto hover:border-black outline hover:outline-offset-0"
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="flex gap-5 font-medium text-white h-[40px]">
          <Link
            to="/login"
            className="flex items-center rounded-2xl bg-[#000000] py-2 px-4 hover:bg-white hover:text-black h-full w-auto hover:border-black outline hover:outline-offset-0"
          >
            <p className="w-full">Login</p>
          </Link>
          <Link
            to="/register"
            className="flex items-center rounded-2xl bg-[#000000] py-2 px-4 hover:bg-white hover:text-black h-full w-auto hover:border-black outline hover:outline-offset-0"
          >
            <p className="w-full">Register</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
