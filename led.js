var Gpio = require('onoff').Gpio,
    ledA = new Gpio(04, 'out'),
    ledB = new Gpio(17, 'out'),
    ledC = new Gpio(22, 'out'),
    ledD = new Gpio(10, 'out'),
    ledE = new Gpio(09, 'out'),
    ledF = new Gpio(11, 'out'),
    button = new Gpio(07, 'in', 'both');
var leds=new Array(ledA,ledB,ledC,ledD,ledE,ledF);
var lastLed=ledA;

button.watch(function(err, value) {
  var activeLed=Math.floor(Math.random() * 6);
  lastLed.writeSync(0);
  lastLed=leds[activeLed];
  leds[activeLed].writeSync(value);
});
