import { Link } from "react-router"

export const CardGroup = ({ id, name, description }) => {
  return (
    <div>
      <Delete />
      <Link to={`group/${id}`}>
        <h3 className="text-3xl font-bold">
          {name}
        </h3>
        <p className="text-xl font-semibold">
          {description}
        </p>
      </Link>
    </div>
  )
}