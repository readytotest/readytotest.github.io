fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson') 
.then(response => response.json()) 

//The response is in Unix Time, which isn't human readable so converting time to Pacific.
.then(response => { document.querySelector("earthquake-time").textContent = new Date((response.features[0]?.properties.time)).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
return response;
})

.then(response => { document.querySelector("earthquake-mag").textContent = (response.features[0]?.properties.mag)
return response;
})

.then(response => { document.querySelector("earthquake-place").textContent = (response.features[0]?.properties.place)
return response;
})

.then(response => { document.querySelector("earthquake-long").textContent = (response.features[0]?.geometry.coordinates[0])
return response;
})

.then(response => { document.querySelector("earthquake-lat").textContent = (response.features[0]?.geometry.coordinates[1])
return response;
})

.then(response => { document.querySelector("earthquake-depth").textContent = (response.features[0]?.geometry.coordinates[2])
return response;
})