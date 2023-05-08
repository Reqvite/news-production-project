import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {' '}
            {t('Про сторінку')}
        </div>
    );
};

export default AboutPage;
