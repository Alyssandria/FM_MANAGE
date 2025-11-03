import { NAVLINKS, SOCIALS } from "@/lib/constants"
import { Logo } from "./ui/icons/logo"
import { NavLink } from "./ui/nav-link"
import { Button } from "./ui/button"

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e26] w-full p-6 py-12 md:p-12">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-14 lg:flex-row-reverse lg:justify-between">
          <div className="flex items-center gap-4 md:w-1/2 lg:flex-col lg:items-start">
            <input className="w-full block py-2.5 px-6 bg-white rounded-full max-md:placeholder:text-xs max-md:text-xs" placeholder="Updates in your inbox..." />
            <Button className="text-secondary-foreground py-2.5 px-6.5 rounded-full">GO</Button>
          </div>
          <div className="md:mx-auto w-full">
            <nav className="w-full">
              <ul className="grid grid-flow-col grid-rows-4 gap-y-2 md:gap-x-10">
                {NAVLINKS.filter(el => el.INFOOTER).map(el => (
                  <li key={el.NAME}>
                    <NavLink href={"/"} className="text-secondary-foreground">{el.CONTENT}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-center gap-12 w-full md:flex-col-reverse md:w-fit md:items-start">
            <div className="w-full flex items-center justify-between md:justify-start md:gap-4">
              {SOCIALS.map(el => (
                <div className="size-8" key={el.NAME}>
                  {el.ICON}
                </div>
              ))}
            </div>
            <NavLink href={"/"}>
              <Logo className="w-36" textColor="fill-white" />
            </NavLink>
          </div>
        </div>
        <span className="text-gray-700 block text-xs text-center">Copyright 2025. All Rights Reserved</span>
      </div>
    </footer>
  )
}
