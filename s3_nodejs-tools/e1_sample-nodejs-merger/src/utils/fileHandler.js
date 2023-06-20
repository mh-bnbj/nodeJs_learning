const Papa = require('papaparse')
const fs = require('fs')

const readCSV = (filePath) => {
    return new Promise((resolve) => {
        const csvFile = fs.readFileSync(filePath).toString()
        Papa.parse(csvFile, {
            header: true,
            complete: function (results) {
                resolve(results)
            },
        })
    })
}

const readDirectory = (folderPath) => {
    return fs.readdirSync(folderPath)
}

module.exports = {
    readCSV,
    readDirectory,
}
