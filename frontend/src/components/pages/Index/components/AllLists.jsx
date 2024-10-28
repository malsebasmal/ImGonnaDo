import { TargetList } from "../../../TargetList.jsx"

function AllLists(){
  return (
    <ul className="w:100% flex flex:column gap:1rem">
      <li>
        <TargetList />
      </li>
      <li>
        <TargetList />
      </li>
    </ul>
  )
}

export {
  AllLists
}