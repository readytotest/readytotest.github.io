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
/*The third parameter async is optional. We don't need to have it because
by default it is true, but I wanted to add true there to make it clear that
this is not a synchronous request. Synchronous can cause the page to hang up
if there is a problem getting the data.
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests*/
myRepoInfo.open("GET", "https://api.github.com/users/readytotest/repos", true);
myRepoInfo.send();