import { cn } from "@/lib/utils/cn"
import { cva, VariantProps } from "class-variance-authority"
import { LoaderCircle } from "lucide-react"
import React from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded px-4 py-2 font-semibold transition-colors focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-white focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-400 text-white hover:bg-blue-500 focus:bg-blue-600 focus-visible:bg-blue-600 disabled:bg-blue-200 disabled:text-white disabled:hover:bg-blue-200",
        secondary:
          "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 focus-visible:bg-red-700 disabled:bg-red-400 disabled:text-white disabled:hover:bg-red-500",
        destructive:
          "border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 focus:bg-primary-100 focus-visible:bg-primary-100 disabled:border-primary-100 disabled:text-primary-200 disabled:bg-transparent",
      },
      size: {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-6",
        lg: "text-lg py-3 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const iconSizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
}

function renderIcon(
  icon: React.ReactNode,
  iconClass: string,
  extraClass: string
) {
  if (!icon) return null
  return (
    <span className={cn(iconClass, extraClass, "flex items-center")}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<any>, {
            className: cn(
              (icon as React.ReactElement<any>).props.className,
              iconClass
            ),
          })
        : icon}
    </span>
  )
}

export default function Button({
  variant,
  size = "md",
  className,
  children,
  startIcon,
  endIcon,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const iconClass = iconSizeClasses[size ?? "md"]

  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      role='button'
      {...props}
    >
      {loading ? (
        <span className={cn(iconClass, "animate-spin mr-2 flex items-center")}>
          <LoaderCircle className={iconClass} />
        </span>
      ) : (
        renderIcon(startIcon, iconClass, "mr-2")
      )}
      {children}
      {renderIcon(endIcon, iconClass, "ml-2")}
    </button>
  )
}
