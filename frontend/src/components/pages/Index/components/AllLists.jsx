import { TargetList } from "../../../TargetList.jsx"
// import { fetchData } from "../../../../API/api.jsx"
import { useState, useEffect } from "react"


function AllLists(){
  const API_URL = "http://localhost:3000"
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/lists`)
        if (!response.ok) throw new Error("Error in the response of API")
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(`Error for getting the data ${error}`)
      }
    }

    fetchData()
  }, [])



  return (
    <ul className="w:100% flex flex:column gap:1rem">
      {data.map((item, index) => (
        <li key={index}>
          <TargetList name={item.name} description={item.description} />
        </li>
      ))}
    </ul>
  )
}

export {
  AllLists
}