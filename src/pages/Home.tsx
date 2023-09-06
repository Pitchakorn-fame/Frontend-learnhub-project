import ContentCard from '../components/ContentCard'
import useContentList from '../hooks/useContentList'
import Banner from '../components/Banner'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

const Home = () => {
  const { contentList, isLoading, error } = useContentList()
  const { isLoggedIn } = useAuth()

  if (isLoading) return <Loading />
  if (error) return <p>{error}</p>

  return (
    <>
      <Banner name="LearnHub" detail="An investment in knowledge pays the best interest" />
      <div className="flex flex-col items-end w-4/5 bg-[#EAEAEA] my-[60px] mx-auto">
        {isLoggedIn && (
          <Link
            to="/create"
            className={
              'flex justify-center rounded-2xl bg-[#000] py-3 px-10 text-white font-bold mb-[25px] hover:bg-white hover:text-black h-full w-auto hover:border-black outline hover:outline-offset-0'
            }
          >
            Create new content
          </Link>
        )}

        {/* <div className="flex flex-wrap w-[400px] md:w-[830px] md:gap-[30px] lg:w-[1260px] lg:gap-[30px]"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {contentList && contentList.map((content) => <ContentCard key={content.id} content={content} />)}
        </div>
      </div>
    </>
  )
}

export default Home
