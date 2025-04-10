const displayDate = () => {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	
	document.getElementById('displaydate').value = `${day} / ${month} / ${year}`;
};