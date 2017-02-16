const path = require('path');
module.exports = {
    title: 'React Flight Indicators',
    components: './src/components/**/*.js',
    updateWebpackConfig(webpackConfig) {
        // Your source files folder or array of folders, should not include node_modules
        const dir = path.join(__dirname, 'src');
        webpackConfig.module.loaders.push(
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel-loader'
            },
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'assets'),
                loaders: [ 'babel',
                    {
                        loader: 'react-svg',
                        query: {
                            svgo: {
                                plugins: [{removeTitle: false}],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
            }
        );
        return webpackConfig;
    },
};