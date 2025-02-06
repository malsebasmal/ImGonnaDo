export const API = {
  users: [
    {
      id: 1,
      username: "user01",
      email: "user01@gmail.com",
      groups: [
        {
          id: 1,
          name: "group1",
          description: "group1 description",
          tasks: [
            {
              id: 1,
              task: "task1",
              date: "01/11/2024",
              realice: false
            },
            {
              id: 1,
              task: "task2",
              date: "01/11/2024",
              realice: false
            }
          ]
        },
        {
          id: 2,
          name: "group2",
          description: "group2 description",
          tasks: [
            {
              id: 1,
              task: "task1",
              date: "01/11/2024",
              realice: false
            },
            {
              id: 2,
              task: "task2",
              date: "01/11/2024",
              realice: false
            }
          ]
        }
      ]
    }
  ]
}