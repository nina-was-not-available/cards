import type {Meta, StoryObj} from "@storybook/react";
import SliderDemo from "@/components/ui/slider/slider";

const meta = {
    title: 'Components/SliderDemo',
    component: SliderDemo,
    tags: ['autodocs'],
} satisfies Meta<typeof SliderDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {}