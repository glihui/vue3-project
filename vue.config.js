 module.exports = {
    chainWebpack: config => {
        const vueRule = config.module.rule('vue');
        vueRule
            .test(/\.vue$/)
            .use('vue-loader')
            .options({
                compilerOptions: {
                    isCustomElement: tag => tag === 'plastic-button'
                }
            })
    }
    // module: {
    //     rules: [
    //         test: /\.vue$/,
    //         use: 'vue-loader',
    //         options: {
    //             compilerOptions: {
    //                 isCustomElement: tag => tag === 'plastic-button'
    //             }
    //         }
    //     ]
    // }
    
}