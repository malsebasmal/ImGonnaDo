import { Link } from "react-router"
import DeleteIcon from "@/icons/DeleteIcon"

function CardList() {
  return (
    <Link to="#" className="w-full bg-cPink hover:bg-cWhite hover:text-cPink text-cBlack py-2 px-3 rounded flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="opacity-75 font-medium">5/20 tareas completadas</p>
        <DeleteIcon />
      </div>
      <div className="flex flex-col justify-center gap-[2px]">
        <h3 className="text-3xl font-bold">Title Example</h3>
        <p className="text-xl font-semibold">Description example</p>
      </div>
    </Link>
  )
}

export default CardList