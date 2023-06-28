import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { nanoid } from '@reduxjs/toolkit';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

 interface ArticleTextBlockComponentProps {
  classname?: string;
  block: ArticleTextBlock
 }

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { classname, block } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [classname])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={nanoid()} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
