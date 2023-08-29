import { FormEvent, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ReactStars from 'react-stars'
import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import { host } from '../constant'
import { toast } from 'react-hot-toast'
import Loading from '../components/Loading'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState<string>()
  const [newRating, setNewRating] = useState<number>()
  const { content, isLoading, error } = useContent(id || '1')

  useEffect(() => {
    if (content) {
      setNewComment(content.comment)
      setNewRating(content.rating)
    }
  }, [content])

  const token = localStorage.getItem('token')

  const handleEdit = async (event: FormEvent) => {
    event.preventDefault()

    // How do I know that edit need Authorization
    try {
      const res = await fetch(`${host}/content/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          comment: newComment,
          rating: newRating,
        }),
      })
      const data = await res.json()

      if (data.statusCode >= 400) {
        throw new Error(data.message)
      }
      toast.success('Sucessfully edited')
      navigate(`/content/${id}`)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  if (isLoading || !content) return <Loading />
  if (error) return <h1>error</h1>

  return (
    <div>
      <Banner name="Edit Content" />
      <form
        onSubmit={handleEdit}
        className="flex flex-col rounded-2xl border-2 border-solid w-1/4 text-[20px] font-bold gap-6 p-4 bg-[#D9D9D9]"
      >
        <label>Comment</label>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="rounded-lg  w-11/12 border-gray-500 p-1"
          required
        />
        <label>Rating</label>

        <ReactStars
          value={newRating}
          onChange={(rating) => setNewRating(rating)}
          count={5}
          size={24}
          color2={'#ffd700'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Edit
