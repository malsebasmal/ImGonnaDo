import { Route, Routes } from "react-router-dom"
import { AllListIndex } from "./components/pages/Index/AllListIndex.jsx"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllListIndex />}/>
      <Route path="/:id"/>
    </Routes>
  )
}

export default App
