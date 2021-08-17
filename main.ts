basic.forever(function () {
    let segundos = 0
    let minutos = 0
    let horas = 0
    if (horas == 12) {
        basic.showIcon(IconNames.Heart)
    }
    if (minutos == 59) {
        basic.showIcon(IconNames.Happy)
    }
    if (segundos == 60) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
