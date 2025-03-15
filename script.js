
async function getWeather(location) {

	try {
		const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=days&key=JK237L99V62XFJJWBQH4UWVG7&contentType=json`, {
			mode: 'cors',
			method: 'GET'
		});
		const data = await response.json();
			console.log(data);
		
		const container = document.querySelector('#container');

		const addressData = await data.resolvedAddress;
		const address = document.querySelector('#address');
		container.appendChild(address);	
		address.textContent = `${addressData}`;
		
				const tempData = await data.days[0].temp;
				const temp = document.querySelector('#temp');
				container.appendChild(temp);	
				temp.textContent = `${tempData}°`;

		const feelsLikeData = await data.days[0].feelslike;
		const feelsLike = document.querySelector('#feels-like');
		container.appendChild(feelsLike);	
		feelsLike.textContent = `Feels like ${feelsLikeData.toFixed(0)}°`;

				const tempMaxData = await data.days[0].tempmax;
				const tempMax = document.querySelector('#temp-max');
				container.appendChild(tempMax);	
				tempMax.textContent = `High: ${tempMaxData.toFixed(0)}°`;
				
			const tempMinData = await data.days[0].tempmin;		
			const tempMin = document.querySelector('#temp-min');
			container.appendChild(tempMin);	
			tempMin.textContent = `Low: ${tempMinData.toFixed(0)}°`;
				
				const iconData = await data.days[0].icon;
				const icon = document.querySelector('#icon');
				container.appendChild(icon);	
				icon.textContent = `${iconData}`;

		const conditionsData = await data.days[0].conditions;
		const conditions = document.querySelector('#conditions');
		container.appendChild(conditions);	
		conditions.textContent = `${conditionsData}`;

			const descriptionData = await data.days[0].description;
			const description = document.querySelector('#description');
			container.appendChild(description);	
			description.textContent = `${descriptionData}`;

		
		} catch(error) {
			console.log("Error fetching data", error);
		}
	}
	
	

	const locationInput = document.querySelector('#locationInput');
	document.body.appendChild(locationInput);
	
	const submit = document.querySelector('#submit');
	document.body.appendChild(submit);


	submit.addEventListener('click', () => {
		getWeather(`${locationInput.value}`);
		
	});