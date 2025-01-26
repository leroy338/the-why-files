import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

export function Container({
  children,
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className="relative w-full">
      <div className={cn("container", className)}>
        {children}
      </div>
    </Component>
  )
} 