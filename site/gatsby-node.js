/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateWebpackConfig = ({
  actions,
  stage,
  rules,
  plugins,
  loaders,
  getConfig,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src/'),
        src$: path.resolve(__dirname, 'src/'),
      },
    },
  })
}
