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

const readSourcesNames = (fileNames, startWith) => {
    const wantedNames = fileNames.filter((fileName) => {
        return fileName.startsWith(startWith)
    })

    const sources = wantedNames.map((wantedName) => {
        // using rejex to delete catalog and .csv from catalogA.csv
        return wantedName.replace(/catalog|.csv/g, '')
    })

    return sources
}

const generateCSV = async (data) => {
    const csv = Papa.unparse({
        fields: ['SKU', 'Description'],
        data: data.map((product) => {
            return {
                SKU: product.SKU,
                Description: product.Description,
            }
        }),
    })

    await fs.writeFileSync('./output/result.csv', csv)
}

module.exports = {
    readCSV,
    readDirectory,
    readSourcesNames,
    generateCSV,
}
