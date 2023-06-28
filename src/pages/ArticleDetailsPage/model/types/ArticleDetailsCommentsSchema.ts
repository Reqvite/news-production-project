import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Сomment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
