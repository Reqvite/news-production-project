import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('get error', () => {
    test('should retrun error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
