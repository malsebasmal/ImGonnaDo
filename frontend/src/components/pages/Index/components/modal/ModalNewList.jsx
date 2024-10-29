import PropTypes from "prop-types"

function ModalNewList({ onClose }) {
  return (
    <div>
      <form action="" method="post">
        <input type="text" placeholder="Name List" name="name" id="name" />

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
        </div>

        <div>
          <label htmlFor="limit">Limit of things to do</label>
          <div>http://localhost:5173/
            <input type="number" name="limit" id="limit" />
            <button>unlimited</button>
          </div>
        </div>

        <div>
          <button>Save</button>
          <button className="color:white" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

ModalNewList.propTypes = {
  onClose: PropTypes.func.isRequired
}

export {
  ModalNewList
}