import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', 'tsx');
    config.module?.rules?.push(buildCssLoader(true));

    if (config.module) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules
            ? config.module.rules.map((rule: RuleSetRule | '...') => {
                if (rule !== '...' && rule.test instanceof RegExp
                    && rule.test.toString().includes('svg')) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            }) : [];
    }

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};
