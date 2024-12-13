import useFetch from "@/api/useFetch"
import Section from "@/components/Section"
import SubTitle from "@/components/SubTitle"
import { useParams } from "react-router"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"

function GroupPage() {
  const { id } = useParams()
  const { data, loading } = useFetch(`${import.meta.env.VITE_LISTS_API_URL}/${id}`)
  console.log(data)

  return (
    <Section className="">
      <SubTitle name={data.name} />
      <p className="text-white">
        {data.description}
      </p>
      {/* Progress bar */}
      {/* Input for search tasks */}
      
      <div className="h-96 overflow-auto">
        <Table>
          <TableHead>
            <TableHeadCell>N°</TableHeadCell>
            <TableHeadCell>Thing you do</TableHeadCell>
            <TableHeadCell>Date realice</TableHeadCell>
            <TableHeadCell>Check</TableHeadCell>
          </TableHead>
          <TableBody>
            {data.task?.map((task) => (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>1</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.dateRealice}</TableCell>
                <TableCell>
                  <input type="checkbox" name="" id="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </Section>
  )
}

export default GroupPage