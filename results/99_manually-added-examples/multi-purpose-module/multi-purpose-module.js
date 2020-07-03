var multiPurposeModule = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	return firstName + " " + lastName;
};

multiPurposeModule.prototype.sayHello = function () {
	return "Hello, my name is " + this.firstName + " " + this.lastName;
};

multiPurposeModule.anotherFunction = function () {
	return "I am another function!";
};

module.exports = multiPurposeModule; 