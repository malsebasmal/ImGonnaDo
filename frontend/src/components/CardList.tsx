import { Link } from "react-router"
import DeleteIcon from "@/icons/DeleteIcon"
import { Task } from "@/interfaces/ApiInterfaces"


function CardList({name, description, id, tasks} : {name: string, description: string, id: string, tasks: Task}) {
  const totalTask = tasks.length
  const completedTask = tasks.filter(task => task.check).length

  return (
    <Link to={`group/${id}`} className="w-full bg-cPink hover:bg-cWhite hover:text-cPink text-cBlack py-2 px-3 rounded flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="opacity-75 font-medium">
          {completedTask}/{totalTask} tareas completadas
        </p>
        {/* cambiarlo por tres puntos donde me aparezca lo de editar y borrar */}
        <DeleteIcon />
      </div>
      <div className="flex flex-col justify-center gap-[2px]">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-xl font-semibold">{description}</p>
      </div>
    </Link>
  )
}

export default CardList