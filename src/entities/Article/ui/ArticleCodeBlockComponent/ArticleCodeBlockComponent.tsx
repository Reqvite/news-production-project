import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
 classname?: string;
 block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { classname, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [classname])}>
            <Code text={block.code} />
        </div>
    );
});
