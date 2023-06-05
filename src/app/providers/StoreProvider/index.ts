import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/config';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    AppDispatch,
};
