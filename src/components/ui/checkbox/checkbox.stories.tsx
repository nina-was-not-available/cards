import type {Meta, StoryObj} from '@storybook/react'
import {CheckboxComponent} from "@/components/ui/checkbox/checkbox";



const meta = {
    title: 'Components/CheckboxComponent',
    component: CheckboxComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxStory: Story = {
        args: {
            text: 'fkfkkfkf'
        }
}
