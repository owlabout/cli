const fs = require('fs')
const path = require('path')

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
}
