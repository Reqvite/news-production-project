import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

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
            {/* <Input
                onChange={onChange}
                value={value}
                placeholder="Введите текст"
            /> */}
            <Counter />
        </div>
    );
};

export default MainPage;
