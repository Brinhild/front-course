function getWeather() {
    const cityName = document.getElementById("city-input").value;
    document.getElementById("city-name").textContent = cityName;

    const apiKey = "b5c87afb809f8807508182cbdcf49011";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lat=44.34&lon=10.99&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("pressure").textContent = data.main.pressure;
            document.getElementById("humidity").textContent = data.main.humidity;
        })
        .catch(error => {
            alert("Ошибка: " + error.message);
        });
}