import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps } from "react";

const LinkVariants = cva("inline-flex text-primary-foreground font-medium hover:text-primary-foreground/60", {
  variants: {
    variant: {
      default: "",
      pill: "flex bg-primary text-secondary-foreground px-6 py-2.5 rounded-full font-medium shadow-[0_8px_15px] shadow-primary/50",
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
export const NavLink = ({
  children,
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & VariantProps<typeof LinkVariants>
) => {
  return (
    <Link {...props} className={cn(LinkVariants({ variant, className }))}>{children}</Link>
  )
}
