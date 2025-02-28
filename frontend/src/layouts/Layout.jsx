import { Outlet } from "react-router"
import { Header } from "../components/Header.jsx"

export const Layout = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <Outlet />
    </div>
  )
}