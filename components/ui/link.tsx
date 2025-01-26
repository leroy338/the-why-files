import NextLink from "next/link"
import { ComponentPropsWithoutRef, forwardRef } from "react"

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<typeof NextLink>
>(({ ...props }, ref) => (
  <NextLink
    ref={ref}
    {...props}
  />
))
Link.displayName = "Link" 