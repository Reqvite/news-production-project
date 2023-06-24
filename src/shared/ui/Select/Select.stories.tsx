import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PRIMARY : Story = {
    args: {
        label: 'Selcet Value',
        options: [
            { value: '123', content: 'first' },
            { value: '1234', content: 'second' },
        ],
    },
};
