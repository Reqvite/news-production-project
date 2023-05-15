import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    decorators: [withRouter],
    title: 'shared/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const PRIMARY : Story = {
    args: {

    },
};
