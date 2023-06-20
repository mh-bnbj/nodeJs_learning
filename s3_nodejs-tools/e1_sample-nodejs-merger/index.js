const { readCSV, readDirectory } = require('./src/utils/fileHandler')

// 1. Read CSV F1iles
const readFiles = async () => {
    const data = readDirectory('./input')
    console.log('data', data)
}

readFiles()

// 2. Process Files and Merge Products

// 3. Generate output file
