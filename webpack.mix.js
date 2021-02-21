const mix = require('laravel-mix');
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix.ts('resources/js/index.tsx', 'public/js')
    .copyDirectory('resources/images', 'public/images')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss')
    ])

const plugins = mix.inProduction() ? [
    new BundleAnalyzerPlugin()
] : []

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.ts', '.css', '.tsx'],
        alias: {
            '@models': path.resolve(__dirname, './resources/js/models'),
            '@contexts': path.resolve(__dirname, './resources/js/contexts'),
            '@components': path.resolve(__dirname, './resources/js/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?&/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css&/,
                use: ['css-loader', 'postcss-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins
})
    .extract()


mix.disableSuccessNotifications()