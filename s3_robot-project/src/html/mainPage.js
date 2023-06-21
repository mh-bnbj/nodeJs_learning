const dirTranslate = new Map([
    ['NORTH', 'up'],
    ['SOUTH', 'down'],
    ['WEST', 'left'],
    ['EAST', 'right'],
])

var commandNum = 0

$(document).ready(() => {
    getReport()
})

function getReport() {
    $.ajax({
        url: 'http://127.0.0.1:3000/command',
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
        url: 'http://127.0.0.1:3000/command',
        method: 'POST',
        data: JSON.stringify({
            command: `${$('.command .cmInput input').val()}`,
        }),

        success: function (data) {
            let description = ''

            $('.hisItem.active').removeClass('active')

            if (data.error != true) {
                description =
                    'x: ' +
                    data.result.x +
                    ' &nbsp;&nbsp;&nbsp;&nbsp; y:' +
                    data.result.y +
                    ' &nbsp;&nbsp;&nbsp;&nbsp; f:' +
                    data.result.f
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
            } else description = data.result

            $('.command .cmHistory').prepend(`<div class="hisItem active">
                                                <div class="itemNum">${commandNum++}</div>
                                                <div class="itemDescript">
                                                    <div class="itemCommand">${$(
                                                        '.command .cmInput input'
                                                    ).val()}</div>

                                                    <div class="itemSeprator"> ===> </div>
                                                    <div class="itemResult">${description}</div>
                                                </div>
                                            </div>`)

            $('.command .cmInput input').val('')
        },
    })
}
