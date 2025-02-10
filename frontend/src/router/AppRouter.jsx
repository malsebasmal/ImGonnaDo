import { createBrowserRouter } from "react-router"
import { Layout } from "../layouts/Layout.jsx"
import { Groups } from "../pages/Groups.jsx"
import { Group } from "../pages/Group.jsx"

export const router =  createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Groups />
    },
    {
      path: "group/:id",
      element: <Group />
    }
  ]
}])