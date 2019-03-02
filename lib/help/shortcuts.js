const log = console.log
const chalk = require('chalk')

const helpMessage = `The following commands are avaiable (with dotfiles installed)
${chalk.green('fuck')} # retry last command with sudo

${chalk.green('ef')} ${chalk.blue('<file>')} # open file in editor
${chalk.green('ed')} ${chalk.blue('<dir>')} # open dir in editor
${chalk.green('eda')} ${chalk.blue('<dir>')} # add dir to editor (-a option)

${chalk.green('ea')} # (e)dit .bash_(a)liases
${chalk.green('ep')} # (e)dit .bash_(p)rofile
${chalk.green('sb')} # (s)ource .(b)ash_profile

${chalk.green('ll')} # ls -lah

${chalk.green(
  'serve',
)} # serve current dir from localhost:8000 with static file server

${chalk.green('s')} ${chalk.blue(
  '<name>',
)} # save the current dir as name in bashmarks
${chalk.green('g')} ${chalk.blue('<name>')} # go to a bashmark
${chalk.green('l')} # list all bashmarks

${chalk.green(
  'dotfiles',
)} <command> # alias for git to commit changes in dotfiles repo

MacOS specific
${chalk.green('showFiles')} # show hidden files in finder
${chalk.green('hideFiles')} # hide hidden files in finder
See https://github.com/ocjojo/dotfiles for details.
`

module.exports = function() {
  log(helpMessage)
}
