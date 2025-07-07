import * as React from "react"
import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: 'left' | 'right'
  }
>(({ className, side = 'left', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-start gap-4 pb-8",
      side === 'right' && "flex-row-reverse",
      className
    )}
    {...props}
  />
))
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-4 top-8 h-full w-0.5 bg-border",
      className
    )}
    {...props}
  />
))
TimelineConnector.displayName = "TimelineConnector"

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-4 pb-4",
      className
    )}
    {...props}
  />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
TimelineIcon.displayName = "TimelineIcon"

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 min-w-0", className)}
    {...props}
  />
))
TimelineContent.displayName = "TimelineContent"

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
TimelineDescription.displayName = "TimelineDescription"

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
}