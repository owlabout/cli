const log = console.log
const {exec} = require('../../helper')
const chalk = require('chalk')

const installedGlobalMessage = `Installed. See
$ ${chalk.green('owl')} ${chalk.yellow('help')} for usage.
`

function installGlobal(root = false) {
  const command = (root ? 'sudo ' : '') + 'npm install -g'
  return exec(command)
}

module.exports = {
  global: () => {
    installGlobal()
      .catch(() => {
        log(`${chalk.yellow('Error')} Trying again with root access..`)
        return installGlobal(true)
      })
      .then(() => {
        log(installedGlobalMessage)
      })
      .catch(err => {
        log(err)
        log(chalk.red('Could not be installed'))
      })
  },
}
