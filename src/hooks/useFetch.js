import { useState, useEffect } from "react"

const useFetch = (url) => {

  // State Variables Start
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // State Variables End

  // Fetch Data Start
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      } finally {
        setIsLoading(false)
      }

    }
    fetchData()
  }, [url]);
  // Fetch Data End
  return { data, isLoading };


}
export default useFetch