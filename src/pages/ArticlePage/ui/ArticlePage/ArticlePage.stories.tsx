import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    decorators: [withRouter],
    title: 'pages/ArticlePage',
    component: ArticlePage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageVariant : Story = {
    args: {

    },
};
