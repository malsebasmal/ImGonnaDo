// import { Link } from "react-router"
import { Navbar } from "flowbite-react"

function Header() {
  return (
    <Navbar className="absolute w-full lg:w-[920px]" fluid rounded>
      Im gonna do
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Profile
        </Navbar.Link>
        <Navbar.Link href="#">
          All Groups
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header