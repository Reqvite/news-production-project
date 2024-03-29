import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('Про сторінку')}
        </Page>

    );
});

export default AboutPage;
