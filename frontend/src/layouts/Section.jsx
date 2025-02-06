import PropTypes from "prop-types"

export const Section = ({ children, className }) => {
  return (
    <section className={`px-4 flex flex-col w-full lg:w-[920px] h-dvh items-center justify-center ${className || ""}`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}