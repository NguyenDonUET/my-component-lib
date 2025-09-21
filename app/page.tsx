"use client"
import { DropdownItem, DropdownOption } from "@/components/DropdownItem"
import { SubHeader } from "@/components/DropdownItem/SubHeader"
import { DropdownList } from "@/components/DropdownList"
import { ChevronDown } from "lucide-react"
import Select, { components, PlaceholderProps } from "react-select"

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
  { value: "broccoli", label: "Broccoli" },
  { value: "grape", label: "Grape" },
  { value: "orange", label: "Orange" },
  { value: "strawberry", label: "Strawberry" },
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
      },
      { value: "banana", label: "Banana", icon: <span>🍌</span> },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
      { value: "kale", label: "Kale" },
      { value: "lettuce", label: "Lettuce" },
    ],
  },
]

const Placeholder = (props: PlaceholderProps) => {
  return <components.Placeholder {...props} />
}

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
        styles={{
          valueContainer: (base) => ({
            ...base,
            padding: 5,
            borderRadius: 4,
            paddingBlock: 10,
            paddingInline: 16,
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            paddingBlock: 0,
            paddingInline: 0,
          }),
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "#0077C8" : "#DDD",
            "&:hover": {},
            borderRadius: 4,
            "&:focus": {
              outline: 4,
              outlineOffset: 4,
              outlineColor: "#FBE122",
            },
          }),
        }}
        noOptionsMessage={() => "No options message"}
        options={groupedOptions}
        isMulti={true}
        components={{
          Option: (props) => {
            // Check if this is a group header (has options array) or an actual option (has value)
            const hasValue = "value" in props.data
            if (!hasValue) {
              return <components.Option {...props} />
            }
            return (
              <DropdownItem
                {...(props as any)}
                itemType='checkbox+text'
                className='p-0!'
              />
            )
          },
          MenuList: (props) => (
            <DropdownList {...props} className='px-0! py-2' />
          ),
          Menu: (props) => (
            <components.Menu {...props} className='shadow-300' />
          ),
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
          GroupHeading: SubHeader,
          IndicatorSeparator: () => null,
        }}
        classNamePrefix='cebu-select'
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
