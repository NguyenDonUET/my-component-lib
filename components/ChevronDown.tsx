import { type SVGProps } from "react"

interface IProps extends SVGProps<SVGSVGElement> {}

export const ChevronDown = (props: IProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' {...props}>
      <path d='M10.161 2.81 5.995 6.936 1.828 2.811a1.075 1.075 0 0 0-1.514 0 1.05 1.05 0 0 0 0 1.499l4.929 4.88a1.077 1.077 0 0 0 1.514 0l4.929-4.88a1.05 1.05 0 0 0 0-1.5 1.1 1.1 0 0 0-1.525 0' />
    </svg>
  )
}
