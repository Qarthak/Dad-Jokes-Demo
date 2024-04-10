async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com");
  console.log(response);
}
fetchJoke();
