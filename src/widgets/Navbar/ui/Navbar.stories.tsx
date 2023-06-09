import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    decorators: [withRouter],
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarVariant: Story = {
    args: {

    },
};
