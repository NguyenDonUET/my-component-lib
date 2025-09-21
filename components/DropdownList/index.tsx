"use client"

import { components, MenuListProps } from "react-select"

export const DropdownList = (props: MenuListProps<any>) => {
  return (
    <components.MenuList {...props}>
      <div>{props.children}</div>
    </components.MenuList>
  )
}
