microshield.Servo(microshield.Servos.S0, 0)
tinkercademy.LED(DigitalPin.P12, OnOff.On)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        microshield.Servo(microshield.Servos.S0, 90)
        tinkercademy.LED(DigitalPin.P12, OnOff.On)
        tinkercademy.LED(DigitalPin.P14, OnOff.Off)
    }
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    microshield.Servo(microshield.Servos.S0, 0)
    tinkercademy.LED(DigitalPin.P14, OnOff.On)
    tinkercademy.LED(DigitalPin.P12, OnOff.Off)
})
