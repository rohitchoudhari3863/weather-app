async function getWeather() {
    let city = document.getElementById("city").value;

    // 🔑 Replace YOUR_API_KEY below
    let apiKey = "YOUR_API_KEY";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather").innerText = "City not found!";
            return;
        }

        document.getElementById("weather").innerHTML = `
            <p><b>${data.name}</b></p>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerText = "Error fetching data!";
    }
}
