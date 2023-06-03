import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('сounterSlice', () => {
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
    test('setusername', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' });
    });
});
