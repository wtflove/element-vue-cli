module.exports = {
  devServer: {
    disableHostCheck: true
  },
  baseUrl: process.env.NODE_ENV === 'development'
    ? '/dev/'
    : '/'
}
