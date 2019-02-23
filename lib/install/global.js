const log = console.log
const {exec, isDir, getRootDir} = require('../../helper')
const path = require('path')
const chalk = require('chalk')

const installedGlobalMessage = `Installed. See
$ ${chalk.green('owl')} ${chalk.yellow('help')} for usage.
`

function installGlobal(root = false) {
  const isDevVersion = isDir(path.resolve(getRootDir(), '.git'))
  let command = 'npm install -g'
  command = (root ? 'sudo ' : '') + command
  command = command + (isDevVersion ? '' : ' owlabout/cli')
  return exec(command)
}

module.exports = function() {
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
}
