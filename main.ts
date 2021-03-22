/**
 * This is a basic step counter
 */
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
let counter = 0
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(counter)
})
