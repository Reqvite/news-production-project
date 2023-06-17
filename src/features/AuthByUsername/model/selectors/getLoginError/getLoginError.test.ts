import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('get error', () => {
    test('should retrun error', () => {
        const state: any = {
            loginForm: { error: 'error' },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
});
