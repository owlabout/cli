const chalk = require('chalk')
const conf = require('conf')
const log = console.log

const argv = require('minimist')(process.argv.slice(2))

const helpMessage = `Usage
$ ${chalk.green('owl')} ${chalk.yellow('<command>')} ${chalk.blue('<options>')}

Commands
  ${chalk.yellow('help')} - print this help statement
  ${chalk.yellow('install')} - install this tool as global npm package
    ${chalk.blue('bashmarks')} - install bashmarks
  ${chalk.yellow('setup')} - create a new project
    ${chalk.blue('docker')} - asks questions to generate a docker-compose file

Examples
  Install bashmarks to create and jump to bookmarked directories in the console
  $ ${chalk.green('owl')} ${chalk.yellow('install')} ${chalk.blue('bashmarks')}

  Use the interactive CLI to generate a docker-compose.yml
  $ ${chalk.green('owl')} ${chalk.yellow('setup')} ${chalk.blue('docker')}
`

switch (argv._[0]) {
  case 'install':
    console.log('installing')
    break
  case 'help':
  default:
    log(chalk(helpMessage))
    break
}
