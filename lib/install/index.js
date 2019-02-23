const log = console.log

module.exports = function(argv, config) {
  switch (argv._[1]) {
    case 'dotfiles':
      require('./dotfiles')()
      break
    default:
      require('./global')()
      break
  }
}
