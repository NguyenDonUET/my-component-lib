import { OptionProps, components } from "react-select"
import { cva } from "class-variance-authority"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils/cn"

export type DropdownItemType = "text" | "icon+text" | "checkbox+text"

export interface DropdownOption {
  value: string
  label: string
  icon?: React.ReactNode // optional icon
  supportText?: string // optional support text
}

type DropdownItemProps = OptionProps<DropdownOption, false> & {
  itemType: DropdownItemType
  supportText?: string
  isCompact?: boolean
}

const dropdownItem = cva("flex items-center cursor-pointer gap-2 ", {
  variants: {
    state: {
      default: "active:bg-[#88C5ED]",
      focused: "bg-[#CCEBFF] text-[#0063A6]",
      selected: "bg-[#88C5ED] text-[#0063A6]",
    },
    type: {
      text: "justify-start",
      "icon+text": "gap-2",
      "checkbox+text": "gap-2",
    },
    isCompact: { true: "py-2 px-3", false: "px-6 py-4" },
  },
  defaultVariants: {
    state: "default",
    type: "text",
    isCompact: false,
  },
})

export const DropdownItem = (props: DropdownItemProps) => {
  const { isFocused, isSelected, data, children, itemType, isCompact } = props

  const state = isSelected ? "selected" : isFocused ? "focused" : "default"
  const supportText = props.data.supportText

  return (
    <components.Option {...props}>
      <div className={cn(dropdownItem({ state, type: itemType, isCompact }))}>
        {itemType === "icon+text" && data.icon && (
          <div className='w-4 h-4'>{data.icon}</div>
        )}

        {itemType === "checkbox+text" && (
          <span
            className={`w-4 h-4 flex items-center justify-center border rounded ${
              isSelected ? "bg-blue-500 border-blue-500" : "border-gray-300"
            }`}
          >
            {isSelected && <Check className='w-3 h-3 text-white' />}
          </span>
        )}

        <span>{children}</span>
      </div>
      {supportText && <p className='text-gray-500 text-xs'>{supportText}</p>}
    </components.Option>
  )
}
