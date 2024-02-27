// Declare variables using const instead of var for better scoping
const temp = document.getElementById('temp');
const cityName = document.getElementById('city');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const searchinput = document.getElementById('searchinput');
const serchbox = document.getElementById('serchbox');
const body_img = document.getElementById('body_img');
const body_data = document.getElementById('body_data');
const deatil = document.getElementById('deatil');
const error = document.getElementById('error');

// Async function to fetch weather data
async function checkWeather(city) {
    // API key
    const apiKey = 'f27b269d54e4fa1e72993364a80fa8bd';
    try {
      
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        
        temp.innerHTML = Math.floor(data.main.temp) + '°C';
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        windspeed.innerHTML = data.wind.speed + 'km/h';

      
        switch (data.weather[0].main) {
            case "Clouds":
                body_img.src = 'image/cloud.png';
                break;
            case "Clear":
                body_img.src = 'image/clear.png';
                break;
            case "Rain":
                body_img.src = 'image/rain.png';
                break;
            case "Drizzle":
                body_img.src = 'image/drizzle.png'; // Corrected the image name
                break;
            case "Mist":
                body_img.src = 'image/mist.png';
                break;
            case "Haze":
                body_img.src = 'image/haze.png';
                break;
            default:
                body_img.src = ''; 
        }

        // Show weather data container
        body_data.style.display = 'flex';
        deatil.style.display = 'flex';
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


serchbox.addEventListener('click', () => {
    const cityIn = searchinput.value;
    checkWeather(cityIn);
});
