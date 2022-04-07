let medida = 0
basic.forever(function () {
    medida = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (medida >= 13) {
        basic.showNumber(medida)
        music.playMelody("E F G - - - - - ", 111)
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
        }
    }
    basic.pause(1000)
})
