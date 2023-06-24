import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import cls from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
 classname?: string;
}

export const ProfileCardHeader = (props: ProfileCardHeaderProps) => {
    const { classname } = props;

    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const readOnly = useSelector(getProfileReadOnly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfileCardHeader, {}, [classname])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                {readOnly ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                )
                    : (
                        <>
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINED}
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                theme={ButtonTheme.OUTLINED}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )}
            </div>
        </div>
    );
};
