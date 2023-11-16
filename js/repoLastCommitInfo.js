let writeMain = document.querySelector('main');

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    writeMain.innerHTML = ("Repository Last Commit<br>");
    repos.forEach((repo)=>{
    writeMain.insertAdjacentHTML('beforeend', `<a href="${repo.html_url}">${repo.name}: ${new Date(repo.pushed_at)}</a><br>`);
    });
 }
};
xhttp.open("GET", "https://api.github.com/users/readytotest/repos", true);
xhttp.send();