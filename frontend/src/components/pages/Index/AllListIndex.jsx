import { Title } from "../../Title.jsx"
import { AllLists } from "../Index/components/AllLists.jsx"
import { Button } from "../../Button.jsx"

function AllListIndex() {
  return (
    <section>
      <Title />

      <AllLists />

      <Button action="add" text="New" icon=""/>
      <Button action="remove" text="Remove" icon=""/>
      <Button action="edit" text="Edit" icon=""/>
    </section>
  )
}

export {
  AllListIndex
}