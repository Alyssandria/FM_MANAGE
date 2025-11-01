import { Logo } from "./ui/icons/logo"
import { NavLink } from "./ui/nav-link"

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e26] h-40 w-full p-6 py-12 md:p-12">
      <div className="container flex">
        <div>
          <NavLink href={"/"}>
            <Logo className="w-28 md:w-36" textColor="fill-white" />
          </NavLink>
        </div>
      </div>
    </footer>
  )
}
