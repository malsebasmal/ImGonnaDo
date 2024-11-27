import { createBrowserRouter } from "react-router"
import Layout from "@/Layouts/Layout"
import GroupsPage from "@/pages/GroupsPage"
import GroupPage from "@/pages/GroupPage"

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <GroupsPage />
    },
    {
      element: <GroupPage />
    }
  ]
}])

export default router