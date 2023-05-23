import { StoreProvider } from 'app/providers/StoreProvider';
import { ElementType } from 'react';

const StoreDecorator = (StoryFn:ElementType, { parameters }:any) => {
    const initial = {

    };
    return (
        <StoreProvider initialState={initial}>
            <StoryFn />
        </StoreProvider>
    );
};

export default StoreDecorator;
