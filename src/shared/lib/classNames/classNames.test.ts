import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('some')).toBe('some');
    });

    test('with additional class', () => {
        const expected = 'some theme';
        expect(classNames('some', {}, ['theme'])).toBe(expected);
    });

    test('with mods class', () => {
        const expected = 'some hovered active theme';
        expect(classNames('some', { hovered: true, active: true }, ['theme'])).toBe(expected);
    });

    test('with mods  false class', () => {
        const expected = 'some hovered theme';
        expect(classNames('some', { hovered: true, active: false }, ['theme'])).toBe(expected);
    });

    test('with mods  undefined class', () => {
        const expected = 'some hovered theme';
        expect(classNames('some', { hovered: true, active: undefined }, ['theme'])).toBe(expected);
    });
});
