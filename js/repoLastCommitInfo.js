let writeMain = document.querySelector('main');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    writeMain.innerHTML = ("Repository Last Commit<br>");
    repos.forEach((repo)=>{
    writeMain.insertAdjacentHTML('beforeend', `${repo.name}: <a href="${repo.html_url}">URL</a> ${new Date(repo.pushed_at)}<br>`);
    });
 }
};
xhttp.open("GET", "https://api.github.com/users/readytotest/repos", true);
xhttp.send();