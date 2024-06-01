async function showLastCommitMessages() {
    const repoUrl = 'https://api.github.com/users/readytotest/repos';

    try {
        const repoResponse = await fetch(repoUrl);
        console.log('Repo API Status:', repoResponse.status);
        if (!repoResponse.ok) {
            throw new Error(`HTTP error! Status: ${repoResponse.status}`);
        }

        const repositories = await repoResponse.json();
        console.log('Response Body Repo API:', repositories);

        let commitMessages = 'Welcome to Ready to Test (QA)!\nThe latest commits in my repos:\n\n';

        for (const repo of repositories) {
            const commitsUrl = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`;
            const commitsResponse = await fetch(commitsUrl);
            const commits = await commitsResponse.json();

            if (commits.length) {
                const lastCommit = commits[0].commit.message;
                commitMessages += `${repo.name}: ${lastCommit}\n`;
            } else {
                commitMessages += `${repo.name}: No commits found.\n`;
            }
        }

        alert(commitMessages);
    } catch (error) {
        alert('You should be seeing my latest commits here,\n but something went wrong?!');
        console.error(error);
    }
}

showLastCommitMessages();