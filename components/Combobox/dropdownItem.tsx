import { Combobox } from "@headlessui/react"

type DropdownItemType = "text" | "icon-text" | "checkbox-text"

export type DropdownOption = {
  id: string
  label: string
  type?: DropdownItemType
  icon?: React.ReactNode
}

type DropdownItemProps = {
  option: DropdownOption
}

export function DropdownItem({ option }: DropdownItemProps) {
  return (
    <Combobox.Option
      key={option.id}
      value={option}
      className={({ active, selected }) =>
        `
          relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2
          ${active ? "bg-blue-100" : ""}
          ${selected ? "bg-blue-50 font-medium" : ""}
        `
      }
    >
      {({ selected }) => (
        <>
          {/* render UI theo type */}
          {option.type === "icon-text" && option.icon && (
            <span className='h-5 w-5'>{option.icon}</span>
          )}

          {option.label}

          {option.type === "checkbox-text" && (
            <span className='ml-auto'>
              <input
                type='checkbox'
                checked={selected}
                readOnly
                className='h-4 w-4 accent-blue-500'
              />
            </span>
          )}
        </>
      )}
    </Combobox.Option>
  )
}
