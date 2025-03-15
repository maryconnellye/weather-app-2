
async function getWeather(location) {

	try {
		const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=days&key=JK237L99V62XFJJWBQH4UWVG7&contentType=json`, {
			mode: 'cors',
			method: 'GET'
		});
		const data = await response.json();
			console.log(data);
		const addressData = await data.address;
			console.log(addressData);
		const tempMaxData = await data.days[0].tempmax;
			console.log(tempMaxData);
		const tempMinData = await data.days[0].tempmin;
			console.log(tempMinData);
		const tempData = await data.days[0].temp;
			console.log(tempData);
		const feelsLikeData = await data.days[0].feelslike;
			console.log(feelsLikeData);
		const conditionsData = await data.days[0].conditions;
			console.log(conditionsData);
		const descriptionData = await data.days[0].description;
			console.log(descriptionData);
		const iconData = await data.days[0].icon;
			console.log(iconData);
		
			
		} catch(error) {
			console.log("Error fetching data", error);
		}
	}
	
	const locationInput = document.querySelector('#locationInput');
		document.body.appendChild(locationInput);
	
	const submit = document.querySelector('#submit');
		document.body.appendChild(submit);

	const address = document.querySelector('#address');
		document.body.appendChild(address);	

	submit.addEventListener('click', () => {
		getWeather(`${locationInput.value}`);
		
	});