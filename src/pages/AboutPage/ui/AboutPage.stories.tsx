import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    decorators: [withRouter],
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const PageVariant : Story = {
    args: {

    },
};
