import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widget/SideBar',
    decorators: [withRouter],
    component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Sidebar: Story = {
    args: {

    },
};
