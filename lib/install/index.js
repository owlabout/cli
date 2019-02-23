const log = console.log

module.exports = function(argv, config) {
  switch (argv._[1]) {
    case 'bashmarks':
      log('installing bashmarks')
      break
    default:
      require('./global')()
      break
  }
}
