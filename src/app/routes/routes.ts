import { createBrowserRouter } from "react-router"
import AllListPage from "@app/pages/allList/Page"
import OneListPage from "@app/pages/oneList/Page"

const ROUTER = createBrowserRouter([
  {
    path: "/alllist",
    element: <AllListPage />,
  },
  {
    path: "/onelist",
    element: <OneListPage />
  }
])

export default ROUTER