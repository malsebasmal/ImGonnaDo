import Section from "@/components/Section"
import SubTitle from "@/components/SubTitle"
import LoadingIcon from "@/icons/LoadingIcon"
import TableList from "@/components/Table"
import Button from "@/components/Button"
import { initialStateList, initialStateTask, List, Task } from "@/interfaces/ApiInterfaces"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Progress } from "flowbite-react"

function GroupPage() {
  const { id } = useParams()  
  const [list, setList] = useState<List>(initialStateList)
  const [tasks, setTasks] = useState<Task>([])
  const [loading, setLoading] = useState(true) 
  const getList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_LISTS_API_URL}/${id}`)
      setList(response.data)
      setTasks(response.data.task)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getList()
  }, [])

  const totalTask = tasks.length
  const completedTask = tasks.filter(task => task.check).length  
  const percentage = totalTask > 0 ? (completedTask / totalTask) * 100 : 0

  const handleTaskCheck = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, check: !task.check } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <Section className="">
      {loading ? (
        <LoadingIcon color="pink" />
      ) : (
        <>
          <SubTitle name={list.name} />
          <p className="text-cWhite text-lg font-semibold text-center">
            {list.description}
          </p>
          <div className="w-full">
            <Progress progress={percentage} size="lg" labelProgress/>;
          </div>
          {/* Input for search tasks */}

          <div className="h-[22rem] w-full">
            <TableList tasks={tasks} onCheckToggle={handleTaskCheck}/>
          </div>

          <Button className="mt-10 w-full bg-cBlue text-cWhite hover:bg-cWhite hover:text-cBlue font-bold text-xl rounded-full py-2 px-3" text="add task" />
        </>
      )}
    </Section>
  )
}

export default GroupPage