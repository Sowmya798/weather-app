// ✅ Your API Key
const apiKey = "2179498100434d8cf4395be30ec630f1";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const output = document.getElementById("output");

    if (!city) {
        output.innerHTML = "<p class='error'>Please enter a city name</p>";
        return;
    }

    output.innerHTML = "Loading...";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        console.log(data); // Debug in console

        if (res.ok) {
            output.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🌤 Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind: ${data.wind.speed} m/s</p>
            `;
        } else {
            output.innerHTML = `<p class='error'>${data.message}</p>`;
        }
    } catch (err) {
        output.innerHTML = `<p class='error'>Error: ${err.message}</p>`;
    }
}
