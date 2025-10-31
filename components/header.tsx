import { NavLink } from "./ui/nav-link"
import { cn } from "@/lib/utils"
import { Logo } from "./ui/icons/logo"
import { ComponentPropsWithoutRef } from "react"
import { NAVLINKS } from "@/lib/constants"
import { MobileMenu } from "./mobile-menu"

export const Header = ({ className, ...props }: ComponentPropsWithoutRef<"header">) => {
  return (
    <header className={cn("h-24 z-10", className)} {...props}>
      <nav className="size-full p-6 md:p-12 container">
        <ul className="size-full flex items-center justify-between ">
          <NavLink href={"/"}>
            <Logo className="w-28 md:w-36" />
          </NavLink>
          <div className="flex lg:mx-auto gap-8 max-md:hidden">
            {NAVLINKS.filter(el => el.INHEADER).map(el => (
              <li key={el.NAME} className="text-xs">
                <NavLink href={"/"}>{el.CONTENT}</NavLink>
              </li>
            ))}
          </div>
          <MobileMenu />
          <NavLink href={"/"} variant={"pill"} className="text-sm hidden lg:block">Get Started</NavLink>
        </ul>
      </nav>
    </header>
  )
}
