import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
 classname?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [classname])}>
            <p />
        </div>
    );
};
