const url = require('url')
const fs = require('fs')

const handleServeFile = (req, res) => {
    const urlParsed = url.parse(req.url)

    if (req.headers.accept != undefined) {
        res.setHeader('Content-Type', req.headers.accept)
    }

    if (urlParsed.pathname.includes('mainPage')) {
        try {
            res.write(fs.readFileSync(`./src/html${urlParsed.pathname}`))
        } catch (err) {
            res.write('error')
        }
    } else if (urlParsed.pathname.includes('.jpg')) {
        try {
            res.write(
                fs.readFileSync(`.${urlParsed.pathname.replace('%20', ' ')}`)
            )
        } catch (err) {
            res.write('error')
        }
    } else {
        try {
            res.write(fs.readFileSync(`.${urlParsed.pathname}`))
        } catch (err) {
            res.write('error')
        }
    }

    res.end()
}

module.exports = {
    handleServeFile,
}
