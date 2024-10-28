import { useState, useEffect } from "react"


function TargetList() {
  return (
    <div className="w:100% flex flex:row jc:space-between ai:center p:0.5rem r:1rem bg:#ffbffa">
      <div>
        <h3 className="f:1.5em">List Name</h3>
        <p className="f:1.2em">List description...</p>
      </div>
      <div>
        {/* Change this for svg, check, trash (delete) and edit */}
        <button>✅</button>
      </div>
    </div>
  )
}

export {
  TargetList
}