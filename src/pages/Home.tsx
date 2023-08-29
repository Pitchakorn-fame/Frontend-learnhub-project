import ContentCard from '../components/ContentCard'
import useContentList from '../hooks/useContentList'
import Banner from '../components/Banner'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const Home = () => {
  const { contentList } = useContentList()
  const { isLoggedIn } = useAuth()

  return (
    <>
      <Banner name="LearnHub" detail="Hub for Educational Videos" />

      {isLoggedIn && (
        <Link
          to="/create"
          className={'rounded-lg bg-[#ff9100] py-3 px-10 text-white font-bold flex w-[250px] mt-[30px]'}
        >
          Create new content
        </Link>
      )}

      <div className="flex flex-wrap mx-auto w-[1260px] gap-[30px] mt-[30px]">
        {contentList && contentList.map((content) => <ContentCard key={content.id} content={content} />)}
      </div>
    </>
  )
}

export default Home
