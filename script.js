
async function getWeather(location) {

try {
	const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days%2Chours%2Calerts&key=JK237L99V62XFJJWBQH4UWVG7&contentType=json`, {
		mode: 'cors',
		method: 'GET'
	});
	const data = await response.json();
	console.log(data);

} catch(error) {
	console.log("Error fetching data", error);
}
}

const locationInput = document.querySelector('#location');
	document.body.appendChild(locationInput);

const submit = document.querySelector('#submit');
	document.body.appendChild(submit);
	submit.addEventListener('click', () => {

		getWeather(`${locationInput.value}`);	
	});