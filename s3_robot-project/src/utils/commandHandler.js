const parseCommand = (command) => {
    const job = command.split(' ')[0]

    const value =
        command.split(' ')[1] != undefined
            ? {
                  x: parseInt(command.split(' ')[1].split(',')[0]),
                  y: parseInt(command.split(' ')[1].split(',')[1]),
                  f: command.split(' ')[1].split(',')[2],
              }
            : {}

    return {
        job: job,
        value: value,
    }
}

module.exports = {
    parseCommand,
}
