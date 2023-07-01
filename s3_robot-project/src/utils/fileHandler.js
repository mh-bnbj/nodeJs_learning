const fs = require('fs')

const readCommandFile = (filePath) => {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' })

    const commands = data.split(/\r?\n/)
    console.log(commands)
    return commands
}

module.exports = {
    readCommandFile,
}
