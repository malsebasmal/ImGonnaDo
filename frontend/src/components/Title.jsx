import PropTypes from "prop-types"

function Title({ styles }) {
  return (
    <h1 className={styles}>
      Im gonna Do
    </h1>
  )
}

Title.propTypes = {
  styles: PropTypes.string
}

export {
  Title
}