import PropTypes from "prop-types"

function Button({ styles, action, text }) {
  return (
    <button className={styles}>{text}</button>
  )
}

Button.propTypes = {
  styles: PropTypes.string,
  action: PropTypes. string,
  text: PropTypes.string,
}


export {
  Button
}