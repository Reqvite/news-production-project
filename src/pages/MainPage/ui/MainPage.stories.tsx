import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    decorators: [withRouter],
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageVariant : Story = {
    args: {

    },
};
