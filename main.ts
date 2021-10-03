let szam = 0
input.onGesture(Gesture.Shake, function () {
    szam = randint(1, 3)
    if (szam == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (szam == 2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (szam == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
