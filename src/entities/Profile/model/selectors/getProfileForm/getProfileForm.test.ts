import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should retrun form ', () => {
        const form = {

        };

        const state : DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
});
