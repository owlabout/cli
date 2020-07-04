const chalk = require('chalk')
const Conf = require('conf')
const log = console.log

const config = new Conf()
const helpMessage = `Usage
$ ${chalk.green('owl')} ${chalk.yellow('<command>')} ${chalk.blue('<options>')}

Commands
  ${chalk.yellow('help')} - print this help statement
    ${chalk.blue('shortcuts')} - show available shortcuts
  ${chalk.yellow('version')} - print the version of this CLI tool
  ${chalk.yellow(
    'install',
  )} - install this tool, usually already done if you see this
    ${chalk.blue('dotfiles')} - install dotfiles
  ${chalk.yellow('setup')} - create a new project
    ${chalk.blue('docker')} - asks questions to generate a docker-compose file
    ${chalk.blue(
      'configfiles',
    )} - select from a list of config files for your project

Examples
  Install dotfiles mostly for aliases and bash functions, includes bashmarks
  $ ${chalk.green('owl')} ${chalk.yellow('install')} ${chalk.blue('dotfiles')}

  Use the interactive CLI to generate a docker-compose.yml
  $ ${chalk.green('owl')} ${chalk.yellow('setup')} ${chalk.blue('docker')}
`

module.exports = function (argv) {
  switch (argv._[0]) {
    case 'version':
      log('Version: ' + require('../package.json').version)
      break
    case 'install':
      require('./install')(argv, config)
      break
    case 'help':
      if (argv._[1]) {
        require('./help')(argv, config)
        break
      }
    case 'setup':
      if (argv._[1]) {
        require('./setup')(argv, config)
        break
      }
    default:
      log('unknown command:', argv._[0])
      log(helpMessage)
      break
  }
}
