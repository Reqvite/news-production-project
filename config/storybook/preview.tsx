import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: 'light', color: '#ffffff' },
                { name: 'dark', class: 'dark', color: '#000000' },
            ],
        },
    },
    decorators: [
        ThemeDecorator,
    ],

};

export default preview;
