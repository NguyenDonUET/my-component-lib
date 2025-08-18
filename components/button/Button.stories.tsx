import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
import { ArrowRight, Mail } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  argTypes: {
    children: { control: false },
    variant: { control: false },
    size: { control: false },
    startIcon: { control: false },
    endIcon: { control: false },
    disabled: { control: false },
    loading: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Primary",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
}
export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Start Icon */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button startIcon={<Mail />} size='sm'>
          Small
        </Button>
        <Button startIcon={<Mail />} size='md'>
          Medium
        </Button>
        <Button startIcon={<Mail />} size='lg'>
          Large
        </Button>
      </div>

      {/* Variants with Start Icon */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant='primary' startIcon={<Mail />}>
          Primary
        </Button>
        <Button variant='secondary' startIcon={<Mail />}>
          Secondary
        </Button>
        <Button variant='destructive' startIcon={<Mail />}>
          Destructive
        </Button>
      </div>
      {/* Variants with End Icon */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant='primary' endIcon={<Mail />}>
          Primary
        </Button>
        <Button variant='secondary' endIcon={<Mail />}>
          Secondary
        </Button>
        <Button variant='destructive' endIcon={<Mail />}>
          Destructive
        </Button>
      </div>
      {/* Variants with Both Start and End Icon */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant='primary' startIcon={<Mail />} endIcon={<Mail />}>
          Primary
        </Button>
        <Button variant='secondary' startIcon={<Mail />} endIcon={<Mail />}>
          Secondary
        </Button>
        <Button variant='destructive' startIcon={<Mail />} endIcon={<Mail />}>
          Destructive
        </Button>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button disabled>Primary</Button>
      <Button variant='secondary' disabled>
        Secondary
      </Button>
      <Button variant='destructive' disabled>
        Destructive
      </Button>
    </div>
  ),
}
export const Loading: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button loading>Primary</Button>
      <Button loading variant='secondary'>
        Secondary
      </Button>
      <Button loading variant='destructive'>
        Tertiary
      </Button>
    </div>
  ),
}

export const GradientColor: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button className='rounded-exaggerated bg-gradient-to-br from-gradient-yellow-1 to-gradient-yellow-2 text-white'>
        Primary
      </Button>
      <Button className='bg-gradient-to-b from-gradient-blue-1 to-gradient-blue-2 text-white'>
        Secondary
      </Button>
      <div className='border size-24 border-indigo-600 ...'></div>
      <div className='border-2 size-24 border-indigo-600 ...'></div>
      <div className='border-4 size-24 border-indigo-600 ...'></div>
      <div className='border-(length:--border-default)  border-solid p-4 shadow-default'>
        <p className='text-caption'>Đây là một div có viền tùy chỉnh.</p>
      </div>
    </div>
  ),
}
