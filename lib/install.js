const log = console.log
const {global} = require('./install/index')

module.exports = function(argv, config) {
  switch (argv._[1]) {
    case 'bashmarks':
      log('installing bashmarks')
      break
    default:
      global()
      break
  }
}
