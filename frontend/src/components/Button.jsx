import PropTypes from "prop-types"

function Button({ styles, onClick, text }) {
  return (
    <button onClick={onClick} className={styles}>{text}</button>
  )
}

Button.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}


export {
  Button
}