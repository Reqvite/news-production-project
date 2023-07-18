import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState();

    const onChange = (val:string) => {
        setValue(value);
    };

    return (
        <Page>
            <BugButton />
            {t('Main')}
            <Counter />
        </Page>
    );
};

export default memo(MainPage);
