function convertToWords(){
	const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

	const input = document.getElementById('numberInput').value;
	const resultDiv = document.getElementById('result');
	const errorDiv = document.getElementById('error');
	resultDiv.innerHTML = '';		// Useful for real-time updates. Rather than using value.
	errorDiv.innerHTML = '';

	if(input == '')
		return;

	if(isNaN(input) || input.includes('.') || input.length > 3) {
		errorDiv.innerHTML = `Invalid Input! Enter a number between 0 and 999.\n`;
		return;
	}

	const number = parseInt(input, 10);
	if(number == 0){
		resultDiv.innerHTML = `Zero`;
		return;
	}

	let words = '';
	
	if(Math.floor(number / 100) > 0){
		words += ones[Math.floor(number / 100)] + ' Hundred ';
	}

	const lastTwoDigits = number % 100;		// Taking the last two digits from the number also ensuring it is greater than zero.

	if(lastTwoDigits >= 11 && lastTwoDigits <= 19) {
		// Ensuring that last two digits are between 11 and 19
		words += teens[Math.floor(lastTwoDigits - 11)];
	}

	else{
		if(Math.floor(lastTwoDigits / 10) > 0) {
			// Adding the tens digit term if it was between 11 and 19 it will check it before hand.
			words += tens[Math.floor(lastTwoDigits / 10)] + ' ';
		}

		// Finally adding the ones digit term to the string.
		words += ones[lastTwoDigits % 10];
	}
	
	// Finally adding the string to the result div element.
	resultDiv.innerHTML = words.trim();
}