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
      <Banner name="LearnHub" detail="An investment in knowledge pays the best interest" />
      <div className="bg-[#EAEAEA] pt-[60px]">
        {isLoggedIn && (
          <div className="flex flex-row-reverse mr-[110px]">
            <Link
              to="/create"
              className={'flex justify-center rounded-lg bg-[#000] py-3 px-10 text-white font-bold w-[250px] mb-[25px]'}
            >
              Create new content
            </Link>
          </div>
        )}

        <div className="flex flex-wrap mx-auto w-[1260px] gap-[30px]">
          {contentList && contentList.map((content) => <ContentCard key={content.id} content={content} />)}
        </div>
      </div>
    </>
  )
}

export default Home
