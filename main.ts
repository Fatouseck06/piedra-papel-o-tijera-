let Juego = 0
input.onGesture(Gesture.Shake, function () {
    Juego = randint(1, 3)
    if (Juego == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (Juego == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
})
