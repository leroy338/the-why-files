import * as React from "react"
import { cn } from "@/lib/utils"

const Bar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  />
))
Bar.displayName = "Bar"

export { Bar } 