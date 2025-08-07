interface Props {
  children: React.ReactNode
}

const Layout = ({ children } : Props) => {
  return (
    <div className="w-xl h-dvh flex items-center justify-center">
      {children}
    </div>
  )
}

export default Layout