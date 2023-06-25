import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should retrun errors', () => {
        const error = 'error';

        const state : DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual(error);
    });
});
