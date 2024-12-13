import { useState, useEffect } from "react"

interface Task {
  _id: string,
  name: string,
  check: boolean,
  dateRealice: Date
}

interface List {
  _id: string,
  name: string,
  description: string,
  limitNumber: number,
  task: Task[]
}
// cambiar luego a un enfoque OPP
function useFetch(url: string) {
  const [data, setData] = useState<List[]>([])
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading }
}

export default useFetch