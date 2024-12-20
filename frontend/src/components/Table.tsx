  import { Task } from "@/interfaces/ApiInterfaces"
  import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"

  function TableList({tasks, onCheckToggle} : {tasks: Task, onCheckToggle: (index: number) => void}) {
    return (
      <Table className="w-full max-h-[22rem] overflow-auto">
        <TableHead>
          <TableHeadCell>N°</TableHeadCell>
          <TableHeadCell>Thing you do</TableHeadCell>
          <TableHeadCell>Date realice</TableHeadCell>
          <TableHeadCell>Check</TableHeadCell>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index} className="border-gray-700 bg-gray-800">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.dateRealice}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={task.check}
                  onChange={() => onCheckToggle(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }

  export default TableList