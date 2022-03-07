const HEADER = {
	NAME: document.querySelector('.form-name'),
	BTN: document.querySelector('.form-btn'),
	RESULT: document.querySelector('.result-form'),
}


HEADER.BTN.addEventListener('click', view);

function view() {
	const firstName = HEADER.NAME.value;
	const serverUrl = 'https://api.genderize.io';
	const url = `${serverUrl}?name=${firstName}`;
	event.preventDefault();

	if (firstName) {
		let response = fetch(url);
		let json = response.then((response) => response.json());
		
		const FirstLetter = firstName[0].toUpperCase() + firstName.slice(1)
		json.then((result) => HEADER.RESULT.textContent = FirstLetter + ' - ' + result.gender);

		HEADER.NAME.value = '';
}
