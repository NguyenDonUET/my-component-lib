import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  DropdownItem,
  DropdownOption,
  DropdownItemType,
} from "@/components/DropdownItem"
import { User } from "lucide-react"

import { components } from "react-select"
import Select from "react-select"

// Wrapper to provide react-select context for DropdownItem
function DropdownItemWrapper(props: any) {
  const { data, ...rest } = props
  return (
    <Select
      options={[data]}
      components={{ Option: DropdownItem }}
      value={data}
      menuIsOpen
      isSearchable={false}
      isClearable={false}
      {...rest}
    />
  )
}

const meta = {
  title: "Components/DropdownItem",
  component: DropdownItem,
  argTypes: {
    // itemType: {
    //   control: { type: "select" },
    //   options: ["text", "icon+text", "checkbox+text"],
    // },
    // isFocused: { control: "boolean" },
    // isSelected: { control: "boolean" },
    // isCompact: { control: "boolean" },
    // data: { control: "object" },
    // children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownItem>

export default meta

type Story = StoryObj<typeof DropdownItem>

const baseOption: DropdownOption = {
  value: "option-1",
  label: "Option 1",
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 320,
      }}
    >
      <DropdownItemWrapper
        data={{ ...baseOption }}
        itemType={"text" as DropdownItemType}
      />
      <DropdownItemWrapper
        data={{ ...baseOption, icon: <User size={16} /> }}
        itemType={"icon+text" as DropdownItemType}
      />
      <DropdownItemWrapper
        data={{ ...baseOption }}
        itemType={"checkbox+text" as DropdownItemType}
      />
    </div>
  ),
}
