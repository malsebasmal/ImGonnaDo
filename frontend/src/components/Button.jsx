import PropTypes from "prop-types"

function Button({ styles, action, text, icon  }) {
  return (
    <button className={styles}>{text}</button>
  )
}

Button.propTypes = {
  styles: PropTypes.string,
  action: PropTypes. string,
  text: PropTypes.string,
  icon: PropTypes.string
}


export {
  Button
}