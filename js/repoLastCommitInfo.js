const writeRepoTimeStamp = document.querySelector('repo-update-timestamp');

const myRepoInfo = new XMLHttpRequest();
myRepoInfo.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    let repoData = JSON.parse(this.responseText);
    writeRepoTimeStamp.innerHTML = (`Repository Last Commit 💾<br><a href="https://github.com/readytotest/readytotest.github.io/blob/main/js/repoLastCommitInfo.js" target="_blank" rel="noopener noreferrer">repoLastCommitInfo.js</a><br>`);
    repoData.forEach((repo)=>{
    writeRepoTimeStamp.insertAdjacentHTML('beforeend', `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>: ${new Date(repo.pushed_at)}<br>`);
    });
 }
};
myRepoInfo.open("GET", "https://api.github.com/users/readytotest/repos", true);
myRepoInfo.send();