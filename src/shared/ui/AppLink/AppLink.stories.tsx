import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    decorators: [withRouter],
    title: 'shared/AppLink',
    component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PRIMARY : Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text',
    },
};

export const SECONDARY : Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text',
    },
};
