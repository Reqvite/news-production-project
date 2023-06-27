import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
 classname?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [classname])}>
            <p />
        </div>
    );
};
