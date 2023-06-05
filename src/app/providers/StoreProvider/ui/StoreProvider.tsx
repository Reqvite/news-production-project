import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/config';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        navigate,

    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
