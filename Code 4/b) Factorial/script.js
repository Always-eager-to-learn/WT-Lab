	const findFactorial = () => {
	let number = prompt(`Enter a number whose factorial you would like to know:\nEnsure that numbers are natural numbers: `);
	if(number === null || number === ''){
		window.alert(`Entered input is incorrect.\nPlease try again.`);
	} else {
		let status = checkNumber(number);
		if(status.toNext){
			let factorialValue = 1, value = status.value;
			for(let i = 1; i <= value; i++)
				factorialValue *= i;
			
			alertMessage(`The factorial of ${value} is ${factorialValue}.`);
		}
		else if(status.value)
			alertMessage(`Please enter a natural number.\n`);
		else
			alertMessage(`Please enter a valid natural number.\n`);
	}
};

const checkNumber = (value) => {
	let numberReg = '[0-9]';
	if(value.match(numberReg)){
		let numberValue = Number.parseInt(value, 10);
		if(numberValue > 0)
			return {value: numberValue, toNext: true};
		else
			return {value: numberValue, toNext: false};
	}
	else
		return {value: undefined, toNext: false};
}

const alertMessage = (message='message') => {
	window.alert(message);
};