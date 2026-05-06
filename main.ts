basic.showString("HOLA")
microshield.Servo(microshield.Servos.S0, 0)
tinkercademy.LED(DigitalPin.P12, OnOff.On)
tinkercademy.LED(DigitalPin.P14, OnOff.Off)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        microshield.Servo(microshield.Servos.S0, 90)
        tinkercademy.LED(DigitalPin.P12, OnOff.Off)
        tinkercademy.LED(DigitalPin.P14, OnOff.On)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
        tinkercademy.LED(DigitalPin.P14, OnOff.Off)
        tinkercademy.LED(DigitalPin.P12, OnOff.On)
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
        basic.pause(1000)
        microshield.Servo(microshield.Servos.S0, 0)
    }
    basic.pause(500)
})
