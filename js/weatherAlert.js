
fetch('https://api.weather.gov/alerts/active?area=AK') 
.then(response => response.json()) 
//.then(response => console.log(response.title))

.then(response => { document.querySelector("weather-title").innerHTML = (response.title)
return response;
})

.then(response => { document.querySelector("weather-updated").innerHTML = (response.updated)
return response;
})

//Alert 1 if available
.then(response => { document.querySelector("weather-headline").innerHTML = (response.features[0]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra").innerHTML = (response.features[0]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity").innerHTML = (response.features[0]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event").innerHTML = (response.features[0]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description").innerHTML = (response.features[0]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description").innerHTML = (response.features[0]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction").innerHTML = (response.features[0]?.properties.instruction)
return response;
})

//Alert 2 if available
.then(response => { document.querySelector("weather-headline2").innerHTML = (response.features[1]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra2").innerHTML = (response.features[1]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity2").innerHTML = (response.features[1]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event2").innerHTML = (response.features[1]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description2").innerHTML = (response.features[1]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description2").innerHTML = (response.features[1]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction2").innerHTML = (response.features[1]?.properties.instruction)
return response;
})