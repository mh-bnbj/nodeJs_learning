const {
    readCSV,
    readDirectory,
    readSourcesNames,
    generateCSV,
} = require('./src/utils/fileHandler')

const { asyncForEach } = require('./src/utils/asyncForEach')
const CatalogModel = require('./src/models/catalogModel')

const readFilesStep = async () => {
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

    return data
}

const processMergeStep = async (data) => {
    const catalogObj = new CatalogModel()

    await asyncForEach(Object.keys(data), async (catalogSourceName) => {
        await catalogObj.addProducts(data[catalogSourceName])
    })

    return catalogObj
}

const runApp = async () => {
    // 1. Read CSV F1iles
    const data = await readFilesStep()

    // 2. Process Files and Merge Products
    const mergedResult = await processMergeStep(data)

    console.log(mergedResult.products)

    // 3. Generate output file
    generateCSV(mergedResult.products)
}

runApp()
