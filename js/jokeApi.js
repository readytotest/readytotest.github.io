fetch('https://official-joke-api.appspot.com/jokes/knock-knock/random')
  .then((response) => {
    console.log("Joke API Response Status:", response.status);
    if (!response.ok) {
      throw new Error(`Joke API Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const joke = data[0];
    document.getElementById('joke-setup').textContent = joke.setup;
    document.getElementById('joke-punchline').textContent = joke.punchline;
  })
  .catch((error) => {
    console.error("Error fetching the joke:", error);
    document.getElementById('joke-setup').textContent = "A joke should be here...but something went wrong.";
    document.getElementById('joke-punchline').textContent = error.message;
  });
