var whois = require('whois-promise');
var Q = require('bluebird');
let test = async () => {
	let data = await whois.json('163.com');
	console.log(data);
	await Q.delay(10 * 1000);
}
let multiTest = async () => {
	for (let i=0; i < 10; i++) {
		await test();
	}
}
console.log("START");
multiTest().then(() => {
	console.log("yeee");
});
console.log("END");
