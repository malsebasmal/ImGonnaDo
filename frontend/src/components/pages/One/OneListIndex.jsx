import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import ProgressBar from "../../ProgressBar.jsx"
import SearchBar from "../../SearchBar.jsx"

function OneListIndex({ id }) {
  const API_URL = `http://localhost:3000/lists/${ id }`
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error("Error in the response of API")
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(`Error for getting the data ${error}`)
      }
    }

    fetchData()
  }, [API_URL])

  return (
    <section className="max-w:60rem w:100% flex flex:col gap:2rem ai:center">
      {data.map((item, index) => (
        <div key={index}>
          <h1 key={index}>{item.name}</h1>
          <p>{item.description}</p>
          <ProgressBar />
          <SearchBar />
          {/* table - try to use material ui components */}
        </div>
      ))}
    </section>
  )
}

OneListIndex.propTypes = {
  id: PropTypes.string.isRequired
}

export {
  OneListIndex
}