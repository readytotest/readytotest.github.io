fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson') 
.then(response => {
  console.log('Earthquake API Status:', response.status);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})

.then(response => {
  // Log the response body to the console
  console.log('Response Body Earthquake API:', response);
  return response;
})

//The response is in Unix Time, which isn't human readable so converting time to Pacific.
.then(response => { document.querySelector("earthquake-time").textContent = new Date((response.features[0]?.properties.time)).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
return response;
})

.then(response => { document.querySelector("earthquake-mag").textContent = (response.features[0]?.properties.mag ?? 0).toFixed(2)
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

.then(response => { document.querySelector("earthquake-depth").textContent = (response.features[0]?.geometry.coordinates[2] ?? 0).toFixed(2)
return response;
})

.then(response => { let receivedUrl = response.features[0]?.properties.url.split("/");
/* By default the URL response includes /executive as the last directory and we are replacing that directory with /map
because we want to have a link that points directly to the map page */
let replaceLastDirectory = receivedUrl.slice(0, receivedUrl.length-0).join("/");
document.querySelector("earthquake-url").innerHTML = `<a href="${replaceLastDirectory}/map" target="_blank" rel="noopener noreferrer">View on map</a>`
return response;
})

.catch(error => {
  console.error('Error fetching earthquake data:', error.message);
  alert('There was an error fetching earthquake data. Please try again later.');
});