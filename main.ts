input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    music.play(music.stringPlayable("D - D - D E D E ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
