import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    decorators: [withRouter],
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageVariant : Story = {
    args: {

    },
};
