basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        // Si el botón A está presionado, hacer que los servos retrocedan rápido.
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        // Si el botón A no está presionado, hacer que los servos se muevan en sentido contrario durante 1 segundo.
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)  // Espera 1 segundo
    }
})


