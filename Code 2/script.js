function validateForm(){
	let firstname = document.getElementById('firstname');
	let email = document.getElementById('email');
	let password = document.getElementById('password');
	let mobileno = document.getElementById('mobileno');
	let errors = 0;
		
	if(!isAlphabetCorrect(firstname))
		errors += 2;
	
	if(!lengthCorrect(password, 6, `The password should contain atleast 6 characters.`))
		errors++;
	
	if(!emailValidate(email))
		errors++;
	
	if(!phoneNumberNotNumbers(mobileno))
		errors++;
	
	else if(!lengthPhoneNumber(mobileno))
		errors++;
	
	if(errors == 0){
		document.getElementById('reset').click();
		return true;
	}
	else
		return false;
}

function isAlphabetCorrect(name){
	let alphabetExp = /^[a-zA-Z]+$/;
	let value = name.value;

	if (alphabetExp.test(value))
		return true;

	else{
		window.alert(`For the first name please enter only alphabets`);
		return false;
	}
}

function emailValidate(email){
	let value = email.value;
	let index = value.indexOf('@');
	let substring = value.substring(index + 1, value.length);

	if(index >= 1){
		let regularExpression = new RegExp('[A-Za-z0-9-]+(\\.[a-z0-9]{2,})+');
		if(substring.match(regularExpression)){
			return true;
		}
		else{
			window.alert(`Please ensure that email is in the correct format.\n`);
			return false;
		}
	}
	else{
		window.alert('Please ensure that email fromat is correct.')
	}
}

function lengthPhoneNumber(phoneNumber){
	if(phoneNumber.value.length !== 10){
		window.alert(`Please ensure that Mobile Number is 10 characters only.\nIn this context`);
		return false;
	}	
	return true;
}

function phoneNumberNotNumbers(phoneNumber){
	let numberExpression = new RegExp('[0-9]+');
	if(!phoneNumber.value.match(numberExpression)){
		window.alert(`Please ensure that the Phone Number contains only numeric characters.`);
		return false;
	}

	return true;
}

function lengthCorrect(element, length=2, helperMsg='Error'){
	if(element.value.length < length){
		window.alert(helperMsg);
		return false;
	}
	return true;
}