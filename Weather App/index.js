
async function fetchData() {
    try{
        const apiKey = "deleted";
        const cityName = document.getElementById("cityName").value;
        console.log(cityName);

        const getLatLon = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`)
        console.log(getLatLon)
        
        const dataLatLon = await getLatLon.json();
        console.log(dataLatLon)
        const lat = dataLatLon[0].lat;
        console.log(lat)
        const lon = dataLatLon[0].lon;
        console.log(lon)

        const getCityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        console.log(getCityWeather)
        const weather = await getCityWeather.json();
        console.log(weather)
        const kelvinTemperature = weather.main.temp;
        console.log(kelvinTemperature)
        const type = weather.weather[0].main;
        console.log(type)

        const celsiusTemp = Math.floor(kelvinTemperature - 273.15);
        console.log(celsiusTemp)

        const img = document.getElementById("weatherIcon");
        if(type == "Clouds"){
            img.src = "Weather Icons/clouds.png"
        }
        else if(type == "Rain"){
            img.src = "Weather Icons/rain.png"
            
        }
        else if(type == "Clear"){
            img.src = "Weather Icons/sun.png"
            
        }
        else if(type == "Snow"){
            img.src = "Weather Icons/snow.png"
        }
        document.getElementById("temp").textContent = `${celsiusTemp}°`
    }
    catch(error){
        console.log(error)
    }
    
}