const apikey = "e865ed4a27c53fe62f0ae3a1dabec79b"

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) =>
{
    event.preventDefault();
    const cityValue = cityInputEl.value
    getWeatherData(cityValue);
}    
)
   
function getWeatherData

