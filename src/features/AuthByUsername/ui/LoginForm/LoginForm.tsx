import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFromProps) => {
    const { className } = props;

    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginFrom, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                type="text"
                onChange={onChangeUsername}
                value={username}
                className={cls.input}
                placeholder={t('Username')}
                autofocus
            />
            <Input
                type="text"
                onChange={onChangePassword}
                value={password}
                className={cls.input}
                placeholder={t('Password')}
            />
            <Button
                onClick={onLoginClick}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Login')}

            </Button>
        </div>
    );
});
