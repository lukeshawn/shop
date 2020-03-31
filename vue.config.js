module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        open: true,
        port: 8878,
        overlay: {
            warnings: true,
            errors: true
          }
    }
}