let writeMain = document.querySelector('repo-update-timestamp');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    writeMain.innerHTML = ("Repository Last Commit 💾<br>");
    repos.forEach((repo)=>{
    writeMain.insertAdjacentHTML('beforeend', `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>: ${new Date(repo.pushed_at)}<br>`);
    });
 }
};
xhttp.open("GET", "https://api.github.com/users/readytotest/repos", true);
xhttp.send();