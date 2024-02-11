import type {Meta, StoryObj} from "@storybook/react";
import {Typography} from "./typopraphy";

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['h1' , 'h2' , 'h3' , 'h4' , 'body1' , 'subtitle1' , 'body2' , 'subtitle2' , 'caption' , 'overline' , 'link1' , 'link2'],
            control: {type: 'radio'},
        },
    },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
    args: {
        variant: 'h1',
        as: 'h1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const H2: Story = {
    args: {
        variant: 'h2',
        as: 'h2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const H3: Story = {
    args: {
        variant: 'h3',
        as: 'h3',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const H4: Story = {
    args: {
        variant: 'h4',
        as: 'h4',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Body1: Story = {
    args: {
        variant: 'body1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const SubTitle1: Story = {
    args: {
        variant: 'subtitle1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const SubTitle2: Story = {
    args: {
        variant: 'subtitle2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Overline: Story = {
    args: {
        variant: 'overline',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Link1: Story = {
    args: {
        variant: 'link1',
        as: 'a',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}

export const Link2: Story = {
    args: {
        variant: 'link2',
        as: 'a',
        children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'
    },
}