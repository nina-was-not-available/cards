import type { Meta, StoryObj } from '@storybook/react'



import {Button} from './'
import LogOutOutline from "@/icons/log-out-outline";

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'link'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
}
// export const Tertiary: Story = {
//     args: {
//         variant: 'tertiary',
//         children: [icon, 'Tertiary Button'],
//         disabled: false,
//     },
// }

export const PrimaryWithIcon: Story = {
    args: {
        disabled: false,
        variant: "primary"
    },
    render: () => (
        <Button>
            <LogOutOutline fill={'white'}/>
            Primary Button
        </Button>
    )
}

export const SecondaryWithIcon: Story = {
    args: {
        disabled: false,
        variant: "secondary"
    },
    render: () => (
        <Button variant={'secondary'}>
            <LogOutOutline fill={'white'}/>
            Secondary Button
        </Button>
    )
}



export const AsLink: Story = {
    args: {
        as: 'a',
        variant: 'link',
        href: 'https://google.com',
        children: 'Button like link',
        disabled: false,
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        children: 'Full Width Button',
        disabled: false,
        fullWidth: true,
    },
}