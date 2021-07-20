import { resolve } from 'path';
import { Configuration } from 'webpack';
import * as nodeExternals from 'webpack-node-externals';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

type KoaDriveWebpackENV = 'development' | 'production' | 'none' | undefined;

export default {
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/'
    },
    target: 'node',
    // devtool: 'source-map',
    resolve: {
        alias: {
        },
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    mode: process.env.NODE_ENV as KoaDriveWebpackENV,
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    externals: [
        nodeExternals()
    ],
    optimization: {
        splitChunks: {
            // // 多入口文件打包 抽离公共模块
            // cacheGroups: {
            //     // 公共模块名称
            //     common: {
            //         name: 'common',
            //         chunks: 'initial',
            //         minChunks: 2,
            //         minSize: 0,
            //         priority: 10
            //     },
            //     vendor: {
            //         priority: 12,
            //         test: /node_modules/,
            //         chunks: 'initial',
            //         minSize: 0,
            //         minChunks: 2
            //     }
            // }
        }
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
} as Configuration;
