import React from 'react'
import { Link } from 'react-router-dom'
import { ContentDto } from '../types/types'
import ReactStars from 'react-stars'
import logoComment from '../assets/comment.png'

interface ContentCardProps {
  content: ContentDto
}

//const ContentCard = ({ content }: ContentDto) =>  why I can't code like this? Props?

// const ContentCard = (props)

// {
//   content: ContentDto
// }

const ContentCard = ({ content }: ContentCardProps) => {
  // const ContentCard = ({ content }: ContentDto) => {}
  return (
    <Link to={`/content/${content.id}`} className="w-[400px] h-auto rounded-lg overflow-hidden bg-[#D9D9D9]">
      <img src={content.thumbnailUrl} alt="video thumbnail" className="object-cover w-full aspect-video" />

      <div className="flex flex-col justify-between m-2">
        <div>
          <p className="break-words font-bold">{content.videoTitle}</p>
          <p>{content.creatorName}</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={logoComment} alt="comment logo" className="w-5 h-5" />
          <p>{content.comment}</p>
        </div>
        {/* <div className="flex flex-col gap-1">
          <p className="break-words font-bold">{content.videoTitle}</p>
          <p>{content.creatorName}</p>

          <div className="flex items-center gap-2">
            <img src={logoComment} alt="comment logo" className="w-5 h-5" />
            <p>{content.comment}</p>
          </div>
        </div> */}

        <div className="flex justify-between items-center bg-[#4CAF50]">
          <p className="flex flex-wrap">{content.postedBy.name}</p>
          <ReactStars count={5} value={content.rating} size={24} color2={'#ffd700'} />
        </div>
      </div>
    </Link>
  )
}

export default ContentCard
