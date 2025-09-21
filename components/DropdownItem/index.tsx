"use client"
import { components, OptionProps } from "react-select"

export const DropdownItem = (props: OptionProps<any>) => {
  const { label, isSelected, isFocused } = props

  return (
    <components.Option {...props}>
      <div
        className={`
          px-3 py-2 cursor-pointer
          ${isFocused ? "bg-gray-100" : ""}
          ${isSelected ? "font-semibold text-blue-600" : "text-gray-700"}
        `}
      >
        {label}
      </div>
    </components.Option>
  )
}
