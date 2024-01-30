fetch('https://api.github.com/users/readytotest/repos') 
.then(response => {
  console.log('Repo API Status:', response.status);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})

.then(repositories => {
  // Log the response body to the console
  console.log('Response Body Repo API:', repositories);
  return repositories;
})

// Removing this part and replacing it with more dynamic code
// .then(response => { document.querySelector("repo-update-timestamp").innerHTML = `<a href="${response[0]?.html_url}" target="_blank" rel="noopener noreferrer">${response[0]?.name}</a>: ${new Date(response[0]?.pushed_at)}<br>`

// return response;
// })

// .then(response => { document.querySelector("repo-update-timestamp").insertAdjacentHTML('beforeend', `<a href="${response[1]?.html_url}" target="_blank" rel="noopener noreferrer">${response[1]?.name}</a>: ${new Date(response[1]?.pushed_at)}<br>`)

// return response;
// })


// Updating code so if we create a new repo, it will appear automatically
// Otherwise I'd need to create a new line with the array index for each repo manually
.then(repositories => {
  const repoTimestamper = document.querySelector("repo-update-timestamp");

     repositories.forEach(repo => {
      repoTimestamper.insertAdjacentHTML(
        'beforeend',
        `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>: ${new Date(repo.pushed_at)}<br>`
      );
    });
  
    return repositories;
  })

.catch(error => {
  console.error('Error fetching earthquake data:', error.message);
  document.querySelector("repo-update-timestamp").innerHTML = `🛑 Unable to fetch repo info❕<br>🛑 ${error.message}<br>`;
});



// The old code below is using XHR to get the API data 
// I am now using Fetch for simplicity
// Keeping the old code for reference and as a comparison for learning


/*
const writeRepoTimeStamp = document.querySelector('repo-update-timestamp');

const myRepoInfo = new XMLHttpRequest();
myRepoInfo.onreadystatechange = function() {
  //get ready state and status
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
 if (this.readyState == 4 && this.status == 200) {
    let repoData = JSON.parse(this.responseText);
    writeRepoTimeStamp.innerHTML = (`<b>Repository Last Commit 💾</b><br>`);
    repoData.forEach((repo)=>{
    writeRepoTimeStamp.insertAdjacentHTML('beforeend', `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>: ${new Date(repo.pushed_at)}<br>`);
    });
    // Logging ready state of XHR request and Http response from server beause I'm exploring how this works.
    console.log(`Ready State of XHR: ${this.readyState} HTTP status code: ${this.status} (retrieving repo last commit from API)`);
 }
 else {
   // Logging ready state of XHR request and Http response from server because I'm exploring how this works.
   console.log(`Ready State of XHR: ${this.readyState} HTTP status code: ${this.status} (retrieving repo last commit from API)`);
   // Show error message on page if there is a problem getting the data
   writeRepoTimeStamp.innerHTML= `Repository last commit info should be here! There is a problem!<br>Ready State: ${this.readyState}<br>Status Code: ${this.status}<br>`;
 }
};
//The third parameter async is optional. We don't need to have it because
//by default it is true, but I wanted to add true there to make it clear that
//this is not a synchronous request. Synchronous can cause the page to hang up
//if there is a problem getting the data.
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
myRepoInfo.open("GET", "https://api.github.com/users/name-here/repos", true);
myRepoInfo.send();
*/
