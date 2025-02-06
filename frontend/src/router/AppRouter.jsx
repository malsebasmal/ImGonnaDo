import { createBrowserRouter } from "react-router"

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