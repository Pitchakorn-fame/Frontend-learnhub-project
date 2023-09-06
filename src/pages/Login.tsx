import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Banner from '../components/Banner'

const Login = () => {
  const { login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      toast.success('Successfully Login')
      navigate('/')
    } catch (err: any) {
      console.error(err)
      toast.error(err.message)
    }
  }
  return (
    <>
      <Banner name="Login" />
      <div className="flex justify-center pt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-2xl border-2 border-solid w-1/4 text-[20px] font-bold gap-6 p-4 bg-[#FFF]"
        >
          <div className="flex flex-col gap-3">
            <label>USERNAME :</label>
            <input
              id="username"
              type="text"
              className="rounded-lg border-2 border-solid  w-11/12 border-[#dcdcdc] p-1 pl-3"
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>PASSWORD :</label>
            <input
              id="password"
              type="password"
              className="rounded-lg border-2 border-solid  w-11/12 border-[#dcdcdc] p-1 pl-3"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-2 place-content-around">
            <button className="rounded-lg bg-[#000] text-white hover:bg-white hover:text-black h-full w-1/2 py-2 hover:border-black outline hover:outline-offset-0">
              LOGIN
            </button>

            <Link
              to="/register"
              className="rounded-lg bg-[#000] text-white text-center hover:bg-white hover:text-black h-full w-1/2 py-2 hover:border-black outline hover:outline-offset-0"
            >
              REGISTER
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
