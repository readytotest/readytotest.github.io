fetch('https://api.weather.gov/alerts/active?area=NV') 
.then(response => response.json()) 
//.then(response => console.log(response.title))
.then(response => { document.querySelector("weather-title").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Title:</a> ' + (response.title)
return response;
})
.then(response => { document.querySelector("weather-headline").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Headline:</a> ' + (response.features[0].properties.headline)
return response;
})
.then(response => { document.querySelector("weather-severity").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Severity:</a> ' + (response.features[0].properties.severity)
return response;
})
.then(response => { document.querySelector("weather-event").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Event:</a> ' + (response.features[0].properties.event)
return response;
})
.then(response => { document.querySelector("weather-description").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Description:</a> ' + (response.features[0].properties.description)
return response;
})
.then(response => { document.querySelector("weather-updated").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Updated:</a> ' + (response.updated)
return response;
})
.then(response => { document.querySelector("weather-instruction").innerHTML = '<a href="https://api.weather.gov/alerts/active?area=NV" target="_blank" rel="noopener noreferrer">Instruction:</a> ' + (response.features[0].properties.instruction)
return response;
})