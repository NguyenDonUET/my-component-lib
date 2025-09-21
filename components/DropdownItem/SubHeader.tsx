import React from "react"
import { GroupBase, GroupHeadingProps } from "react-select"

export const SubHeader: React.FC<
  GroupHeadingProps<any, boolean, GroupBase<any>>
> = ({ children }) => {
  return <div className='px-3 py-2 text-[#4A4A4A] text-[11px]'>{children}</div>
}
