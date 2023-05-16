import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED,
    },
};

export const Background : Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted : Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const Square : Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND,
    },
};

export const SquareM : Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

export const SquareL : Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,

    },
};

export const SquareXl : Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

export const ButtonM : Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

export const ButtonL : Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,

    },
};

export const ButtonXl : Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};
