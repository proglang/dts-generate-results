const dht = require('dht');

const dataPin = 5;
const dhtType = 22; //optional
const sensor = dht(dataPin, dhtType);

setInterval(() => { 
	sensor.read();
}, 2500); // the sensor can only be red every 2 seconds

sensor.on('result', data => {
	console.log(`temp: ${data.temperature}°c`); 
	console.log(`rhum: ${data.humidity}%`); 
});

sensor.on('badChecksum', () => {
	console.log('checksum failed');
});
