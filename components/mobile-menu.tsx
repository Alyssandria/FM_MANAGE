"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NAVLINKS } from "@/lib/constants"
import { Menu } from "lucide-react"
import { NavLink } from "./ui/nav-link"
import { useState } from "react"

export const MobileMenu = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger className="md:hidden cursor-pointer"><Menu /></DialogTrigger>
      <DialogContent className="top-65">
        <DialogHeader>
          <DialogTitle className="sr-only">Mobile Menu</DialogTitle>
        </DialogHeader>
        <ul className="size-full flex  flex-col gap-6">
          {NAVLINKS.filter(el => el.INHEADER).map(el => (
            <li key={el.NAME} className="text-xl size-full text-center font-bold" onClick={() => setIsOpen(false)}>
              <NavLink href={"/"} className="block w-full text-center">{el.CONTENT}</NavLink>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
