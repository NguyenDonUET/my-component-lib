"use client"

import { useState } from "react"
import { Combobox } from "@headlessui/react"
import { ChevronsUpDown } from "lucide-react"
import { DropdownItem, DropdownOption } from "./dropdownItem"

const options: DropdownOption[] = [
  { id: "1", label: "Apple", type: "text" },
  { id: "2", label: "Banana", type: "icon-text", icon: <span>🍌</span> },
  { id: "3", label: "Orange", type: "checkbox-text" },
]

export function ComboBox({ isMulti = false }: { isMulti?: boolean }) {
  const [value, setValue] = useState<DropdownOption | DropdownOption[]>(
    isMulti ? [] : ({} as DropdownOption)
  )
  const [query, setQuery] = useState("")

  const filtered =
    query === ""
      ? options
      : options.filter((opt) =>
          opt.label.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <div className='w-72'>
      <Combobox
        value={value}
        onChange={(val) => {
          if (val === null) return
          setValue(val)
        }}
        multiple={isMulti}
      >
        <div className='relative mt-1'>
          <div className='flex items-center rounded border border-gray-300 bg-white px-2 py-1'>
            <Combobox.Input
              className='flex-1 border-none bg-transparent p-1 text-sm outline-none'
              displayValue={(opt: any) =>
                Array.isArray(opt)
                  ? opt.map((o) => o.label).join(", ")
                  : opt?.label
              }
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Select...'
            />
            <Combobox.Button className='ml-auto text-gray-500'>
              <ChevronsUpDown className='h-4 w-4' />
            </Combobox.Button>
          </div>

          <Combobox.Options className='absolute z-10 mt-1 max-h-40 w-full overflow-y-auto rounded border border-gray-300 bg-white shadow'>
            {filtered.length === 0 ? (
              <div className='cursor-default select-none px-3 py-2 text-gray-400'>
                No results
              </div>
            ) : (
              filtered.map((option) => (
                <DropdownItem key={option.id} option={option} />
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  )
}
