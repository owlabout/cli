const log = console.log

module.exports = function(argv, config) {
  switch (argv._[1]) {
    case 'shortcuts':
      require('./shortcuts')()
      break
    default:
      break
  }
}
