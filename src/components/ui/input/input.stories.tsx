import type {Meta, StoryObj} from '@storybook/react'
import {Input} from "@/components/ui/input/input";



const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['simple', 'password', 'search'],
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {
        variant: 'simple',
        placeholder: 'Simple Checkbox',
        disabled: false,
    },
}

export const Error: Story = {
    args: {
        variant: 'simple',
        error: "Error",
        placeholder: 'Error Checkbox',
        disabled: false,
    },
}

export const Password: Story = {
    args: {
        variant: 'password',
        placeholder: 'Input',
        disabled: false,
    },
}

export const Search: Story = {
    args: {
        variant: 'search',
        placeholder: 'Input',
        disabled: false,
    },
}

