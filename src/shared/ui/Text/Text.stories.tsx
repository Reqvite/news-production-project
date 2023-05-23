import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};
