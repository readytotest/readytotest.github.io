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
 }
 else {
   //Log the error in the console and display it on the page
   //so there isn't an empty section on the page if the api has a problem
   console.log(`Error fetching repository information. Ready State: ${this.readyState} Status Code: ${this.status}.`);
   writeRepoTimeStamp.innerHTML= `Repository last commit info should be here! There is a problem!<br>Ready State: ${this.readyState}<br>Status Code: ${this.status}<br>`;
 }
};
myRepoInfo.open("GET", "https://api.github.com/users/readytotest/repos", true);
myRepoInfo.send();