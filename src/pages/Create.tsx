import { FormEvent, useState } from 'react'
import Banner from '../components/Banner'
import ReactStars from 'react-stars'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { host } from '../constant'

const Create = () => {
  const navigate = useNavigate()
  const [rating, setRating] = useState<number>()
  const [url, setUrl] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    try {
      const res = await fetch(`${host}/content`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          videoUrl: url,
          comment,
          rating,
        }),
      })

      console.log(res)

      if (!res.ok) {
        throw new Error('Error')
      }

      toast.success('Succesfully created!')
      navigate('/')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <Banner name="Create new content" />
      <form
        onSubmit={handleCreate}
        className="flex flex-col rounded-2xl border-2 border-solid w-1/4 text-[20px] font-bold gap-6 p-4 bg-[#D9D9D9] mx-auto mt-40"
      >
        <label>Video URL</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />

        <label>Comment</label>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />

        <ReactStars count={5} onChange={(rating) => setRating(rating)} size={24} color2={'#ffd700'} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Create
