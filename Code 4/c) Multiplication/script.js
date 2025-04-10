function multiplicationTable(){
	let value = prompt('Enter a natural number value whose multiplication you would like to know: ');
	if(value === null || value === ''){
		window.alert(`Please enter a natural number.`);
	}
	else{
		let numberRegex = '[0-9]';
		if(value.match(numberRegex)){
			let number = parseInt(value, 10);
			if(number > 0){
				let table = '';
				for(let i = 1; i <= 10; i++){
					table += `${number} * ${i} = ${number * i}\n`;
				}
				window.alert(table);
				document.write(`${number}'s table upto 10 displayed using alert.<br>`);
			}
			else{
				window.alert('Please enter a positive value.');
			}
		}
		else{
			window.alert('Please enter a correct natural number');
		}
	}
}

multiplicationTable();