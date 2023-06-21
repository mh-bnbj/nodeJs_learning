const RobotModel = require('./src/models/robotModel')
const { parseCommand } = require('./src/utils/commandHandler')
const { readCommandFile } = require('./src/utils/fileHandler')
const http = require('http')
const url = require('url')
const qs = require('querystring')
const { copyFileSync } = require('fs')

const runRobot_byfile = () => {
    const robotModel = new RobotModel(0, 0, 'NORTH')

    const commands = readCommandFile('./commands.txt')

    commands.forEach((rawComand) => {
        let parsedCommand = parseCommand(rawComand)
        console.log(
            robotModel.runCommand(parsedCommand.job, parsedCommand.value)
        )
    })
}

const runRobot_byServer = () => {
    const robotModel = new RobotModel(0, 0, 'NORTH')

    const server = http.createServer((req, res) => {
        const urlParsed = url.parse(req.url)

        res.statusCode = 200

        if (urlParsed.pathname === '/mainPage') {
            res.setHeader('Content-Type', 'text/html')

            res.end(readHtml('./about.html'))
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            })
            let body = ''
            req.on('data', function (data) {
                body += data
                if (body.length > 1e6) req.connection.destroy()
            })
            req.on('end', function () {
                var rawComand = JSON.parse(body).command
                let parsedCommand = parseCommand(rawComand)

                let result = robotModel.runCommand(
                    parsedCommand.job,
                    parsedCommand.value
                )

                res.end(
                    JSON.stringify({
                        error: result.error,
                        result: result.value,
                    })
                )
            })
        }
    })

    server.listen(3000, '127.0.0.1', () => {
        console.log('server is running')
    })
}

if (process.argv[2] === 'file') runRobot_byfile()
else runRobot_byServer()
