import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    position: 'center-left',
    label: 'Button',
    action: 'test',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
  args: {
    type: 'solid',
  },
}

export const Outline: Story = {
  args: {
    type: 'outline',
  },
}
