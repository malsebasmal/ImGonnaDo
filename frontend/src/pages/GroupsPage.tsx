import Section from "@/components/Section"
import CardList from "@/components/CardList"
import Title from "@/components/Title"
import Button from "@/components/Button"
import LoadingIcon from "@/icons/LoadingIcon"
import { List, initialStateList } from "@/interfaces/ApiInterfaces"
import { useEffect, useState } from "react"
import axios from "axios"

function GroupsPage() {  
  const [lists, setLists] = useState<List[]>([initialStateList])
  const [loading, setLoading] = useState(true) 
  const getLists = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_LISTS_API_URL)
      setLists(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getLists()
  }, [])

  return (
    <Section className="gap-10">
      <Title />
      <div className="w-full flex">
        <ul className="w-full flex flex-col gap-4 h-96 overflow-auto">
        {loading ? (
            <LoadingIcon color="pink" />
          ) : (
            lists.map((list) => (
              <li key={list._id}>
                <CardList 
                  id={list._id} 
                  tasks={list.task}
                  name={list.name} 
                  description={list.description} 
                />
              </li>
            ))
          )}
        </ul>
      </div>
      <Button className="w-full bg-cGreen text-cWhite hover:bg-cWhite hover:text-cGreen font-bold text-xl rounded-full py-2 px-3" text="add list"/>
    </Section>
  )
}

export default GroupsPage