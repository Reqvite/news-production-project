import { Avatar } from 'shared/ui/Avatar/Avatar';
import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PRIMARY : Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small : Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
