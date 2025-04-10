function addValues(){
	let keepgoing = true, sumOfNDigits = 0;
	let value, numberToAdd;
	window.alert('To add \'N\' values.');
	while(keepgoing){
		value = prompt('Enter a value to add.\nIf you wish to quit enter either \'q\' or \'quit\': ');
		if(value != null || value != ''){
			let numRegex = '[0-9]';
			if(value.match(numRegex)){
				numberToAdd = parseFloat(value, 10);
				sumOfNDigits += numberToAdd;
			}
			else{
				value = value.toLowerCase();
				if(value === 'q' || value === 'quit'){
					keepgoing = false;
				}
				else{
					window.alert('Please enter a valid number');
				}
			}
		}
		else{
			window.alert('Please enter a value.');
		}
	}
	window.alert(`The sum of \'N\' numbers is ${sumOfNDigits}.`);
}