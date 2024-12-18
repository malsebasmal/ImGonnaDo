import { Task } from "@/interfaces/ApiInterfaces"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Checkbox } from "flowbite-react"

function TableList({tasks} : {tasks: Task}) {
  console.log(tasks)
  return (
    <Table>
      <TableHead>
        <TableHeadCell>N°</TableHeadCell>
        <TableHeadCell>Thing you do</TableHeadCell>
        <TableHeadCell>Date realice</TableHeadCell>
        <TableHeadCell>Check</TableHeadCell>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell>{index + 1}</TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.dateRealice}</TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableList