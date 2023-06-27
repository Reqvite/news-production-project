import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    decorators: [withRouter],
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageVariant : Story = {
    args: {

    },
};
