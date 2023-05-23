import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';

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
                { name: 'light', class: 'app_light_theme', color: '#ffffff' },
                { name: 'dark', class: 'app_dark_theme', color: '#000000' },
            ],
        },
    },
    decorators: [
        ThemeDecorator,
        StoreDecorator,
    ],

};

export default preview;
