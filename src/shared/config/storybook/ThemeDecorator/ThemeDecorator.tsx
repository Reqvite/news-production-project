import { ElementType } from 'react';

const ThemeDecorator = (Story:ElementType) => {
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.add('app');

    return <Story />;
};

export default ThemeDecorator;
