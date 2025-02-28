export const Section = ({ children, className }) => {
  return (
    <section className={`px-4 flex flex-col w-full lg:w-[920px] h-dvh items-center justify-center ${className || ""}`}>
      {children}
    </section>
  )
}