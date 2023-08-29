import { useEffect, useState } from 'react'
import { ContentDto } from '../types/types'
import { host } from '../constant'

const useContentList = () => {
  const [contentList, setContentList] = useState<ContentDto[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`${host}/content`)
        const rawData = await res.json()
        console.log(rawData)
        setContentList(rawData.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { contentList, isLoading, error }
}

export default useContentList
