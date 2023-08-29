import { FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'
import ReactStars from 'react-stars'
import Banner from '../components/Banner'
import { useAuth } from '../providers/AuthProvider'
import { host } from '../constant'
import { toast } from 'react-hot-toast'
import logoTrash from '../assets/trash.png'
import logoComment from '../assets/comment.png'
import logoEdit from '../assets/Edit.png'

const Content = () => {
  const { id } = useParams()
  const { username } = useAuth()
  const { content, isLoading, error } = useContent(id || '1')
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const handleDelete = async (event: FormEvent) => {
    event.preventDefault()

    try {
      const res = await fetch(`${host}/content/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })

      const data = await res.json()

      if (data.statusCode >= 400) {
        throw new Error(data.message)
      }

      toast.success('Sucessfully deleted')
      navigate(`/`)
    } catch (err: any) {
      console.log(err.message)
    }
  }

  if (isLoading || !content) return <Loading />
  if (error) return <h1>error</h1>

  return (
    <>
      <Banner name={content.videoTitle} />

      <div className="flex flex-col mx-auto border-2 border-solid rounded-2xl w-[700px] my-14 p-5 font-bold bg-[#EBECF0]">
        <div className="flex flex-col items-center my-4">
          <p className="text-[30px]">{content.videoTitle}</p>
          <p>{content.creatorName}</p>
        </div>
        <ReactPlayer url={content?.videoUrl} />

        <div className="flex gap-3 pt-5">
          <img src={logoComment} alt="comment logo" className="w-8 h-8" />
          <p className="text-[20px]">{content.comment}</p>
        </div>

        <div className="flex flex-col items-end">
          <ReactStars edit={false} count={5} value={content.rating} size={24} color2={'#ffd700'} />
          <p>Posted by {content.postedBy.username}</p>
          <p>{content.createdAt}</p>
          {/* <p>{formatDate(content.createdAt)}</p> */}
        </div>

        {username === content.postedBy.username && (
          <div className="flex flex-col items-end gap-2 pt-5">
            <Link to={`/edit/${id}`}>
              <div className="flex items-center gap-2">
                <img src={logoEdit} alt="Edit logo" className="w-auto h-5 " />
                <p>Edit</p>
              </div>
            </Link>

            <button onClick={handleDelete} className="flex items-center gap-2">
              <img src={logoTrash} alt="Trash logo" className="w-auto h-5 " />
              <p>DELETE</p>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Content
