import Link from "next/link"
import NavbarLink from "./navbar-link"
const NavbarItems = () => {
    return(
        <div className="w-screen h-10 bg-red-300 gap-2 flex justify-center items-center">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/feedback">Feedback</NavbarLink>
        </div>
    )
}
export default NavbarItems