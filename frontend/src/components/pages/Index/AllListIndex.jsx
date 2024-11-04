import "@master/css"
import { Title } from "../../Title.jsx"
import { AllLists } from "../Index/components/AllLists.jsx"
import { Button } from "../../Button.jsx"

function AllListIndex() {

  return (
    <section className="max-w:60rem w:100% flex flex:col gap:2rem ai:center">
      <Title styles="f:6rem color:#ffbffa"/>

      <div className="max-w:20rem w:100% flex flex:col ai:center">
        <AllLists />
      </div>

      <div className="flex flex:col max-w:20rem w:100% gap:1rem ">
        <Button styles="px:1rem py:0.5rem b:5px|solid|#34b233 bg:#33b23340 color:#ffbffa r:5rem f:1.5em" action="add" text="New"/>
        <Button styles="px:1rem py:0.5rem b:5px|solid|#ce0000 bg:#ce000040 color:#ffbffa r:5rem f:1.5em" action="remove" text="Remove"/>
        <Button styles="px:1rem py:0.5rem b:5px|solid|#5783db bg:#5783db40 color:#ffbffa r:5rem f:1.5em" action="edit" text="Edit"/>
      </div>
    </section>
  )
}

export {
  AllListIndex
}