/**
 * This is a basic step counter using microbit.
 * 
 * This step counter is not very accurate as it relies on 'On Shake' event only.
 */
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
let counter = 0
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(counter)
})
