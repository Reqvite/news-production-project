// @ts-nocheck
import { ArticleView } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticlesPage.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
    classname?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { classname } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    });
    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticlesPage, {}, [classname])} onScrollEnd={onLoadNextPart}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList articles={articles} isLoading={isLoading} view={view} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
