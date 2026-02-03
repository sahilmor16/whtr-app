async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "Please enter a city";
    return;
  }

  try {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch {
    result.innerHTML = "Error fetching weather";
  }
}
