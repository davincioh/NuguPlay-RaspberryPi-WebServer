var express = require('express');
var app = express();
const Gpio = require('pigpio').Gpio;
const led = new Gpio(21, {mode: Gpio.OUTPUT});


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.post('/', function (req, res) {
        console.log(req.body);
                res.send("Connected");
                });

 
app.post('/OnLED', function (req, res) {
	console.log(req.body);
	led.digitalWrite(1);
	let obj=req.body;
	obj.resultCode='OK'
        console.log(obj)
        res.send(obj)
	res.end;
	console.log('Turn ON LED');

});

 

app.post('/offled',function (req, res) {
        console.log(req.body);
	led.digitalWrite(0);
	let obj=req.body;
	obj.resultCode='OK'
	console.log(obj)
	res.send(obj)
	res.end;
	console.log('Turn Off LED');

});

                                                           

app.listen("80", function () {
console.log('Now on Listening');
led.digitalWrite(0);
});
