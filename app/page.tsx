"use client"
import { DropdownItem, DropdownOption } from "@/components/DropdownItem"
import { DropdownList } from "@/components/DropdownList"
import { ChevronDown } from "lucide-react"
import Select, { components } from "react-select"

const options: DropdownOption[] = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "banana",
    label: "Banana",
    icon: <span>🍌</span>,
  },
  { value: "carrot", label: "Carrot", supportText: "Crunchy and healthy" },
  { value: "carrot", label: "Carrot" },
  { value: "carrot", label: "Carrot" },
  { value: "carrot", label: "Carrot" },
  { value: "carrot", label: "Carrot" },
]

const checkboxOptions: DropdownOption[] = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "banana",
    label: "Banana",
  },
  { value: "carrot", label: "Carrot", supportText: "Crunchy and healthy" },
]
const groupedOptions = [
  {
    label: "Fruits",
    options: [
      {
        value: "apple",
        label: "Apple",
        icon: <span>🍏</span>,
        supportText: "Fresh and crispy",
      },
      { value: "banana", label: "Banana", icon: <span>🍌</span> },
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
      <Select
        options={options}
        isMulti={false}
        components={{
          Option: (props) => (
            <DropdownItem
              {...props}
              itemType='icon+text'
              className='p-0! bg-white'
            />
          ),
          MenuList: (props) => (
            <DropdownList {...props} className='px-0! py-2! max-h-[400px]!' />
          ),
          Menu: (props) => <components.Menu {...props} />,
          DownChevron: (props) => {
            return (
              <components.DownChevron {...props}>
                <ChevronDown className='w-6 h-6' />
              </components.DownChevron>
            )
          },
          CrossIcon: (props) => {
            return <components.CrossIcon {...props}></components.CrossIcon>
          },
          IndicatorSeparator: () => null,
        }}
        classNamePrefix='react-select'
        isClearable={false}
      />
      <p>Is Compact</p>
      <Select
        options={options}
        isMulti={false}
        components={{
          Option: (props) => (
            <DropdownItem
              {...props}
              itemType='icon+text'
              className='p-0!'
              isCompact
            />
          ),
          MenuList: (props) => (
            <DropdownList {...props} className='px-0! py-2' />
          ),
          Menu: (props) => <components.Menu {...props} />,
          DownChevron: (props) => {
            return (
              <components.DownChevron {...props}>
                <ChevronDown className='w-6 h-6' />
              </components.DownChevron>
            )
          },
          CrossIcon: (props) => {
            return <components.CrossIcon {...props}></components.CrossIcon>
          },
          IndicatorSeparator: () => null,
        }}
        classNamePrefix='react-select'
        isClearable={false}
      />
      <p>With checkbox</p>
      <Select
        options={checkboxOptions}
        isMulti={false}
        components={{
          Option: (props) => (
            <DropdownItem
              {...props}
              itemType='checkbox+text'
              className='p-0!'
              isCompact
            />
          ),
          MenuList: (props) => (
            <DropdownList {...props} className='px-0! py-2' />
          ),
          Menu: (props) => <components.Menu {...props} />,
          DownChevron: (props) => {
            return (
              <components.DownChevron {...props}>
                <ChevronDown className='w-6 h-6' />
              </components.DownChevron>
            )
          },
          CrossIcon: (props) => {
            return <components.CrossIcon {...props}></components.CrossIcon>
          },
          IndicatorSeparator: () => null,
        }}
        classNamePrefix='react-select'
        isClearable={false}
      />
      {/* <Select
        options={groupedOptions}
        isMulti={false}
        components={{
          Option: (props) => <DropdownItem {...props} itemType='icon+text' />,
          MenuList: (props) => <DropdownList {...props} className='p-0!' />,
          Menu: (props) => <components.Menu {...props} />,
          GroupHeading: SubHeader,
          IndicatorSeparator: () => null,
        }}
        classNamePrefix='react-select'
      /> */}
      {/* <ComboBox isMulti /> */}
    </div>
  )
}
