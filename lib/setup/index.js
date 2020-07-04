const log = console.log

module.exports = function (argv, config) {
  switch (argv._[1]) {
    case 'configfiles':
      require('./configfiles')()
      break
    default:
      break
  }
}
