import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test Counter Value', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const counterValue = screen.getByTestId('value-title');
        expect(counterValue).toHaveTextContent('10');
    });

    test('Increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const counterValue = screen.getByTestId('value-title');
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(counterValue).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const counterValue = screen.getByTestId('value-title');
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(counterValue).toHaveTextContent('9');
    });
});
