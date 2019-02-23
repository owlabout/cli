const chalk = require('chalk')
const Conf = require('conf')
const log = console.log

const config = new Conf()
const helpMessage = `Usage
$ ${chalk.green('owl')} ${chalk.yellow('<command>')} ${chalk.blue('<options>')}

Commands
  ${chalk.yellow('help')} - print this help statement
  ${chalk.yellow('version')} - print the version
  ${chalk.yellow('install')} - install this tool as global npm package
    ${chalk.blue('dotfiles')} - install dotfiles
  ${chalk.yellow('setup')} - create a new project
    ${chalk.blue('docker')} - asks questions to generate a docker-compose file

Examples
  Install dotfiles mostly for aliases and bash functions, includes bashmarks
  $ ${chalk.green('owl')} ${chalk.yellow('install')} ${chalk.blue('dotfiles')}

  Use the interactive CLI to generate a docker-compose.yml
  $ ${chalk.green('owl')} ${chalk.yellow('setup')} ${chalk.blue('docker')}
`

module.exports = function(argv) {
  switch (argv._[0]) {
    case 'version':
      log('Version: ' + require('../package.json').version)
      break
    case 'install':
      require('./install')(argv, config)
      break
    case 'help':
    default:
      log(helpMessage)
      break
  }
}
