const fs = require('fs')
const path = require('path')
const {exec} = require('child_process')

module.exports = {
  getCwd: () => {
    return path.basename(process.cwd())
  },

  getBaseDir: () => {
    return path.basename(path.dirname(fs.realpathSync(__filename)))
  },

  isDir: filePath => {
    try {
      return fs.statSync(filePath).isDirectory()
    } catch (err) {
      return false
    }
  },
  exec: (command, output = false) => {
    return new Promise((resolve, reject) => {
      const child = exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        resolve({
          stdout,
          stderr,
        })
      })
      if (output) {
        child.stdout.pipe(process.stdout)
        child.stderr.pipe(process.stderr)
      }
    })
  },
}
