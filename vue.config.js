// vue.config.js
module.exports = {
    publicPath: '',
    pages:{
        index:{
            entry: 'src/main.js',
            title: process.env.VUE_APP_TITLE
        }
    }
}
  