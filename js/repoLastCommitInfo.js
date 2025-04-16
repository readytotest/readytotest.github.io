//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("https://api.github.com/users/readytotest/repos")
  .then((response) => {
    console.log("Repo API Status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error❕ Status: ${response.status}`);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log("Response Body Repo API:", repositories);
    return repositories;
  })
  .then((repositories) => {
    const repoTimestamper = document.querySelector("repo-update-timestamp");

    // Fetch the last commit message for each repository
    repositories.forEach((repo) => {
      fetch(`https://api.github.com/repos/readytotest/${repo.name}/commits`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error❕ Status: ${response.status}`);
          }
          return response.json();
        })
        .then((commits) => {
          const lastCommitMsg = commits[0]?.commit?.message || "No commit message available❕";
          repoTimestamper.insertAdjacentHTML(
            "beforeend",
            `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a><br>Topics: ${repo.topics}<br>Timestamp: ${new Date(repo.pushed_at).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} Pacific<br>git commit -m: "${lastCommitMsg}"<br>`
          );
        })
        .catch((error) => {
          console.error("Error fetching commit data:", error.message);
          repoTimestamper.insertAdjacentHTML(
            "beforeend",
            `🛑 Unable to fetch commit info for ${repo.name}❕<br>🛑 ${error.message}<br><br>`
          );
        });
    });

    return repositories;
  })
  .catch((error) => {
    console.error("Error fetching repo data:", error.message);
    document.querySelector("repo-update-timestamp").innerHTML =
      `🛑 Unable to fetch repo info❕<br>🛑 ${error.message}<br>`;
  });
