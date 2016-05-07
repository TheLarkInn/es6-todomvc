require('babel-register')
const {writeFileSync} = require('fs')
const {resolve} = require('path')
const getIndexString = require('./get-index-string')
module.exports = function GenerateIndexWithBundlePlugin() {
  this.plugin('done', ({hash}) => {
    const indexHtml = getIndexString(hash)
    const destination = resolve(__dirname, '../../dist/index.html')
    writeFileSync(destination, indexHtml)
  })
}
