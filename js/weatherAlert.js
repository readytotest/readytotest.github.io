
fetch('https://api.weather.gov')
  .then(response => response.json())
  .then(response => { document.querySelector("weather-api-status").textContent = (response.status)
})

fetch('https://api.weather.gov/alerts/active?area=AK') 
.then(response => response.json()) 

.then(response => { document.querySelector("weather-title").textContent = (response.title)
return response;
})

.then(response => { document.querySelector("weather-updated").textContent = (response.updated)
return response;
})

//Alert 1 if available
.then(response => { document.querySelector("weather-headline").textContent= (response.features[0]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra").textContent = (response.features[0]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity").textContent = (response.features[0]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event").textContent = (response.features[0]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description").textContent = (response.features[0]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description").textContent = (response.features[0]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction").textContent = (response.features[0]?.properties.instruction)
return response;
})

//Alert 2 if available
.then(response => { document.querySelector("weather-headline2").textContent = (response.features[1]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra2").textContent = (response.features[1]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity2").textContent = (response.features[1]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event2").textContent = (response.features[1]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description2").textContent = (response.features[1]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description2").textContent = (response.features[1]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction2").textContent = (response.features[1]?.properties.instruction)
return response;
})

//Alert 3 if available
.then(response => { document.querySelector("weather-headline3").textContent = (response.features[2]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra3").textContent = (response.features[2]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity3").textContent = (response.features[2]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event3").textContent = (response.features[2]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description3").textContent = (response.features[2]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description3").textContent = (response.features[2]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction3").textContent = (response.features[2]?.properties.instruction)
return response;
})

//Alert 4 if available
.then(response => { document.querySelector("weather-headline4").textContent = (response.features[3]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra4").textContent = (response.features[3]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity4").textContent = (response.features[3]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event4").textContent = (response.features[3]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description4").textContent = (response.features[3]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description4").textContent = (response.features[3]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction4").textContent = (response.features[3]?.properties.instruction)
return response;
})

//Alert 5 if available
.then(response => { document.querySelector("weather-headline5").textContent = (response.features[4]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra5").textContent = (response.features[4]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity5").textContent = (response.features[4]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event5").textContent = (response.features[4]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description5").textContent = (response.features[4]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description5").textContent = (response.features[4]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction5").textContent = (response.features[4]?.properties.instruction)
return response;
})

//Alert 6 if available
.then(response => { document.querySelector("weather-headline6").textContent = (response.features[5]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra6").textContent = (response.features[5]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity6").textContent = (response.features[5]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event6").textContent = (response.features[5]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description6").textContent = (response.features[5]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description6").textContent = (response.features[5]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction6").textContent = (response.features[5]?.properties.instruction)
return response;
})

//Alert 7 if available
.then(response => { document.querySelector("weather-headline7").textContent = (response.features[6]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra7").textContent = (response.features[6]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity7").textContent = (response.features[6]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event7").textContent = (response.features[6]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description7").textContent = (response.features[6]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description7").textContent = (response.features[6]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction7").textContent = (response.features[6]?.properties.instruction)
return response;
})



