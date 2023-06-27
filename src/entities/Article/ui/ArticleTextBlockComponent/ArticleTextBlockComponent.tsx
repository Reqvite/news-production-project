import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

 interface ArticleTextBlockComponentProps {
  classname?: string;
 }

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { classname } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [classname])}>
            <p />
        </div>
    );
};
