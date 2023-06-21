const dirTranslate = new Map([
    ['NORTH', 'up'],
    ['SOUTH', 'down'],
    ['WEST', 'left'],
    ['EAST', 'right'],
])

$(document).ready(() => {
    getReport()
})

function getReport() {
    $.ajax({
        url: 'http://127.0.0.1:3000',
        method: 'POST',
        data: JSON.stringify({ command: 'REPORT' }),

        success: function (data) {
            console.log(data)
            $('td').empty()
            $('tr')
                .eq(4 - data.result.y)
                .find('td')
                .eq(data.result.x)
                .html(
                    `<i class="fa fa-arrow-${dirTranslate.get(
                        data.result.f
                    )}" style="font-size: 36px"></i>`
                )
        },
    })
}

function sendCommand() {
    $.ajax({
        url: 'http://127.0.0.1:3000',
        method: 'POST',
        data: JSON.stringify({ command: `${$('input').val()}` }),

        success: function (data) {
            if (data.error != true) {
                console.log(data)
                $('td').empty()
                $('tr')
                    .eq(4 - data.result.y)
                    .find('td')
                    .eq(data.result.x)
                    .html(
                        `<i class="fa fa-arrow-${dirTranslate.get(
                            data.result.f
                        )}" style="font-size: 36px"></i>`
                    )
            }
        },
    })
}
