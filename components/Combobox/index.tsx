import { DropdownItem } from "@/components/DropdownItem"
import { DropdownList } from "@/components/DropdownList"
import Select from "react-select"

const options = [
  { value: "1", label: "Headline 1" },
  { value: "2", label: "Headline 2" },
  { value: "3", label: "Headline 3" },
]

export default function ComboBox() {
  return (
    <Select
      isMulti
      options={options}
      components={{
        Option: DropdownItem,
        MenuList: DropdownList,
      }}
      classNamePrefix='react-select'
    />
  )
}
