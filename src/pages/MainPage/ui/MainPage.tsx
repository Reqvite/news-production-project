import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState();

    const onChange = (val:string) => {
        setValue(value);
    };

    return (
        <div>
            <BugButton />
            {t('Main')}
            <Counter />
        </div>
    );
};

export default memo(MainPage);
