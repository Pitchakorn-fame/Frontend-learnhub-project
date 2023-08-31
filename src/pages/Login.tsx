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
              className="rounded-lg border-2 border-solid  w-11/12 border-[#dcdcdc] p-1"
              onChange={(e) => setUsernameInput(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>PASSWORD :</label>
            <input
              id="password"
              type="password"
              className="rounded-lg border-2 border-solid  w-11/12 border-[#dcdcdc] p-1"
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </div>

          <div className="flex place-content-around">
            <button className="rounded-lg bg-[#000] py-3 px-10 text-white hover:bg-white hover:text-black hover:border-[3px] hover:border-black">
              LOGIN
            </button>

            <Link
              to="/register"
              className="rounded-lg bg-[#000] py-3 px-8 text-white hover:bg-white hover:text-black hover:border-[3px] hover:border-black"
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
