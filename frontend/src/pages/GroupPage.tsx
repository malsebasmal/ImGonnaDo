import Section from "@/components/Section"
import SubTitle from "@/components/SubTitle"
import LoadingIcon from "@/icons/LoadingIcon"
import TableList from "@/components/Table"
import { initialStateList, List } from "@/interfaces/ApiInterfaces"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function GroupPage() {
  const { id } = useParams()  
  const [list, setList] = useState<List>(initialStateList)
  const [loading, setLoading] = useState(true) 
  const getList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_LISTS_API_URL}/${id}`)
      setList(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getList()
  }, [])

  return (
    <Section className="">
      {loading ? (
        <LoadingIcon color="pink" />
      ) : (
        <>
          <SubTitle name={list.name} />
          <p className="text-white">
            {list.description}
          </p>
          {/* Progress bar */}
          {/* Input for search tasks */}

          <div className="h-96 overflow-auto">
            <TableList tasks={list.task} />
          </div>
        </>
      )}
    </Section>
  )
}

export default GroupPage