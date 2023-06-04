import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    decorators: [withRouter],
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const PageVariant : Story = {
    args: {

    },
};
