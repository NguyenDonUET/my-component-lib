"use client"
import ComboBox from "@/components/Combobox"
import { DropdownItem } from "@/components/DropdownItem"
import { SubHeader } from "@/components/DropdownItem/SubHeader"
import { DropdownList } from "@/components/DropdownList"
import Select from "react-select"

const options = [
  { value: "1", label: "Headline 1" },
  { value: "2", label: "Headline 2" },
  { value: "3", label: "Headline 3" },
]
const groupedOptions = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
    ],
  },
]

export default function Demo() {
  return (
    <div className='max-w-md mx-auto m-8 flex flex-col gap-4'>
      {/* <Select
        isMulti
        options={options}
        components={{
          Option: DropdownItem,
          MenuList: DropdownList,
        }}
        classNamePrefix='react-select'
      /> */}
      {/* <Select
        options={options}
        components={{
          Option: DropdownItem,
          MenuList: DropdownList,
        }}
        classNamePrefix='react-select'
      />
     */}
      {/* <Select
        options={groupedOptions}
        components={{
          GroupHeading: SubHeader,
          Option: DropdownItem,
          MenuList: DropdownList,
        }}
        classNamePrefix='react-select'
      /> */}
      <ComboBox />
    </div>
  )
}
