export interface Task {
  _id: string,
  name: string,
  check: boolean,
  dateRealice: Date
}

export interface List {
  _id: string,
  name: string,
  description: string,
  limitNumber: number,
  task: Task[]
}

export const initialStateTask = {
  _id: "",
  name: "",
  check: false,
  dateRealice: new Date()
}

export const initialStateList = {
  _id: "",
  name: "",
  description: "",
  limitNumber: 500,
  task: [initialStateTask]
}