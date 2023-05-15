import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widget/SideBar',
    component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Sidebar: Story = {
    args: {

    },
};
