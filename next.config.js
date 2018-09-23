const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  webpack(config, options) {
    // Further custom configuration here
    const _config = {
      resolve: {
        alias: {
          'react-native$': 'react-native-web'
        }
      }
    }
    config.resolve.alias = {...config.resolve.alias,..._config.resolve.alias}
    return config
  }
})
