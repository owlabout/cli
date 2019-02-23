const log = console.log
const {exec, isDir} = require('../../helper')
const path = require('path')
const chalk = require('chalk')
const installDir = '.dotfiles'

const installedMessage = `Installed. Please run
 $ ${chalk.green('source')} ${chalk.blue('~/.bash_profile')}
See https://github.com/ocjojo/dotfiles for details.
`

function clone() {
  const HOME = process.env.HOME
  const isInstalled = isDir(path.resolve(HOME, installDir))
  if (isInstalled) return Promise.resolve()
  const command = `git clone --bare "https://github.com/ocjojo/dotfiles" "${HOME}/${installDir}"`
  return exec(command, true)
}

function checkout() {
  const HOME = process.env.HOME
  const command = `git --git-dir="${HOME}/${installDir}/" --work-tree="${HOME}" checkout \
  && git --git-dir="${HOME}/${installDir}/" --work-tree="${HOME}" config --local status.showUntrackedFiles no`
  return exec(command, true)
}

module.exports = function() {
  clone()
    .then(checkout)
    .then(() => {
      log(installedMessage)
    })
    .catch(err => {
      log(chalk.red('Could not be installed'))
    })
}
