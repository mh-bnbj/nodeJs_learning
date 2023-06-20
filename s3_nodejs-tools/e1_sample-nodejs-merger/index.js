const {
    readCSV,
    readDirectory,
    readSourcesNames,
} = require('./src/utils/fileHandler')

const { asyncForEach } = require('./src/utils/asyncForEach')

// 1. Read CSV F1iles
const readFiles = async () => {
    const fileNames = readDirectory('./input')
    const sources = readSourcesNames(fileNames, 'catalog')
    const data = []
    await asyncForEach(sources, async (sourceName) => {
        data[sourceName] = []

        data[sourceName].catalog = await readCSV(
            `./input/catalog${sourceName}.csv`
        )

        data[sourceName].suppliers = await readCSV(
            `./input/suppliers${sourceName}.csv`
        )

        data[sourceName].barcodes = await readCSV(
            `./input/barcodes${sourceName}.csv`
        )
    })
    console.log('data', data)
}

readFiles()

// 2. Process Files and Merge Products

// 3. Generate output file
