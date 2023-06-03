import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('get error', () => {
    test('should retrun error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
