import PropTypes from "prop-types"

function TargetList({ name, description }) {
  return (
    <a className="w:100% flex flex:row jc:space-between ai:center p:0.5rem r:1rem bg:#ffbffa">
      <div>
        <h3 className="f:1.5em">{ name }</h3>
        <p className="f:1.2em">{ description }</p>
      </div>
      <div>
        {/* Change this for svg, check, trash (delete) and edit */}
        <button>✅</button>
      </div>
    </a>
  )
}

TargetList.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export {
  TargetList
}