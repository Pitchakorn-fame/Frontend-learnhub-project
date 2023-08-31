import { FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import ReactPlayer from 'react-player'
import Loading from '../components/Loading'
import ReactStars from 'react-stars'
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
  if (error) return <p>{error}</p>

  return (
    <>
      <div className="flex justify-center items-center px-[50px] font-semibold text-[40px] h-40 bg-[#D20303] text-white text-center">
        {content.videoTitle}
      </div>

      <div className="flex justify-center bg-[#000] h-screen">
        <div className="flex justify-between border-2 border-solid rounded-2xl w-[1100px] h-max font-bold p-9 mt-14">
          <div className="flex flex-col items-center justify-center gap-7">
            <ReactPlayer url={content?.videoUrl} />
            <p className="text-white">{content.creatorName}</p>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border-2 border-solid border-[#dcdcdc] px-6 pb-8 bg-[#EAEAEA]">
            <div className="flex gap-3 pt-[35px]">
              <img src={logoComment} alt="comment logo" className="w-8 h-8" />
              <p className="text-[20px]">{content.comment}</p>
            </div>

            <div className="flex flex-col items-end gap-5">
              <div className="flex flex-col items-end">
                <ReactStars edit={false} count={5} value={content.rating} size={24} color2={'#ffd700'} />
                <p>Posted by {content.postedBy.username}</p>
                <p>{content.createdAt}</p>
              </div>

              {username === content.postedBy.username && (
                <div className="flex flex-col items-end gap-1">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
