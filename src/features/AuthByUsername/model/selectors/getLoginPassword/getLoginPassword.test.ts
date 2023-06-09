import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('get error', () => {
    test('should retrun error', () => {
        const state: any = {
            loginForm: { password: '' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
