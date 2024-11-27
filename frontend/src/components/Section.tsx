import { ReactNode } from "react"

function Section({ children, className }: {children: ReactNode, className: string}) {
  return (
    <section className={`px-4 flex flex-col w-full h-dvh items-center justify-center${className || ""}`}>
      {children}
    </section>
  )
}

export default Section