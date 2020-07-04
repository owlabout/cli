const log = console.log
const fetch = require('node-fetch')
const {MultiSelect} = require('enquirer')
const fs = require('fs')

const prompt = new MultiSelect({
  name: 'value',
  message:
    'Select config files to generate with arrow buttons and space. Confirm with enter.',
  choices: getListOfFiles(),
  result(names) {
    return this.map(names)
  },
})

function getListOfFiles() {
  const contentsJson = fetch(
    'https://api.github.com/repos/owlabout/cli/contents/',
  )
    .then((response) => response.json())
    .then((data) => {
      let result = []
      for (const entry of data) {
        if (entry.type == 'file') {
          result.push({
            name: entry.name,
            value: entry.download_url,
          })
        }
      }
      return result
    })
  return contentsJson
}

function downloadFilesToDirectory(answers) {
  for (const [name, downloadLink] of Object.entries(answers)) {
    fetch(downloadLink)
      .then((response) => response.text())
      .then((text) => {
        fs.writeFile(name, text, function (err) {
          if (err) throw err
          log('file created: ' + name)
        })
      })
  }
}

function promptUser() {
  prompt
    .run()
    .then((answer) => downloadFilesToDirectory(answer))
    .catch(console.error)
}

module.exports = function () {
  promptUser()
}
