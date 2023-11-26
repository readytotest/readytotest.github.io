
fetch('https://api.weather.gov/alerts/active?area=AK') 
.then(response => response.json()) 
//.then(response => console.log(response.title))

.then(response => { document.querySelector("weather-title").innerHTML = (response.title)
return response;
})

.then(response => { document.querySelector("weather-updated").innerHTML = (response.updated)
return response;
})

/*Added in the ? in response features so it would show undefined on the page instead of being blank
if there was nothing available*/

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
/*If no instruction was provided then the field would be blank and I wanted it to say null instead of being blank, so that's why
I have this converted to a string*/
.then(response => { document.querySelector("weather-instruction").innerHTML = String((response.features[0]?.properties.instruction))
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

.then(response => { document.querySelector("weather-instruction2").innerHTML = String((response.features[1]?.properties.instruction))
return response;
})

//Alert 3 if available
.then(response => { document.querySelector("weather-headline3").innerHTML = (response.features[2]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra3").innerHTML = (response.features[2]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity3").innerHTML = (response.features[2]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event3").innerHTML = (response.features[2]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description3").innerHTML = (response.features[2]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description3").innerHTML = (response.features[2]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction3").innerHTML = String((response.features[2]?.properties.instruction))
return response;
})

//Alert 4 if available
.then(response => { document.querySelector("weather-headline4").innerHTML = (response.features[3]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra4").innerHTML = (response.features[3]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity4").innerHTML = (response.features[3]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event4").innerHTML = (response.features[3]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description4").innerHTML = (response.features[3]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description4").innerHTML = (response.features[3]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction4").innerHTML = String((response.features[3]?.properties.instruction))
return response;
})

//Alert 5 if available
.then(response => { document.querySelector("weather-headline5").innerHTML = (response.features[4]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra5").innerHTML = (response.features[4]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity5").innerHTML = (response.features[4]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event5").innerHTML = (response.features[4]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description5").innerHTML = (response.features[4]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description5").innerHTML = (response.features[4]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction5").innerHTML = String((response.features[4]?.properties.instruction))
return response;
})

//Alert 6 if available
.then(response => { document.querySelector("weather-headline6").innerHTML = (response.features[5]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra6").innerHTML = (response.features[5]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity6").innerHTML = (response.features[5]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event6").innerHTML = (response.features[5]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description6").innerHTML = (response.features[5]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description6").innerHTML = (response.features[5]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction6").innerHTML = String((response.features[5]?.properties.instruction))
return response;
})

//Alert 7 if available
.then(response => { document.querySelector("weather-headline7").innerHTML = (response.features[6]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra7").innerHTML = (response.features[6]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity7").innerHTML = (response.features[6]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event7").innerHTML = (response.features[6]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description7").innerHTML = (response.features[6]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description7").innerHTML = (response.features[6]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction7").innerHTML = String((response.features[6]?.properties.instruction))
return response;
})



