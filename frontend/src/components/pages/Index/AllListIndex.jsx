import "@master/css"
import { Title } from "../../Title.jsx"
import { AllLists } from "../Index/components/AllLists.jsx"
import { Button } from "../../Button.jsx"

function AllListIndex() {
  return (
    <section className="width:full flex flex-direction:col gap:10 ai:center">
      <Title styles="f:5rem"/>

      <AllLists />

      <div className="flex flex:wrap gap:0.5rem ">
        <Button styles="px:1rem py:0.5rem bg:gray r:50%" action="add" text="New" icon=""/>
        <Button styles="px:1rem py:0.5rem bg:gray r:50%" action="remove" text="Remove" icon=""/>
        <Button styles="px:1rem py:0.5rem bg:gray r:50%" action="edit" text="Edit" icon=""/>
      </div>
    </section>
  )
}

export {
  AllListIndex
}