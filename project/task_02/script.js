async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    const joke = `${data.setup}<br>${data.punchline}`;
    document.getElementById('jokeContainer').innerHTML = joke;
}
