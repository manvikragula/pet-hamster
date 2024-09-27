input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
