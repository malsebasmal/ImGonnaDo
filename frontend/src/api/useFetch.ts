import { useState, useEffect } from "react"

function useFetch(url: string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data: Array))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading }
}

export default useFetch