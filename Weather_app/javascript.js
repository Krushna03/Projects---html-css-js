
const apiKey = "d7de86ac94c02d93f2408d5bf9cdc39b"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

  const weatherIcon = document.querySelector('.images');
 
  async function weather(city){
    if(!city){
      alert("Please enter a valid city name.");
        return;
    }
      const response = await fetch(apiURL + city +`&appid=${apiKey}` );
      const data = await response.json();
      console.log(data);
     
      if (data.cod !== 200) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.text').innerHTML = Math.round(data.main.temp) + `°c`;
        document.querySelector('.hum-percent').innerHTML = data.main.humidity + `%`;
        document.querySelector('.wind-percent').innerHTML = data.wind.speed + ` km/h`;

        document.querySelector('.info').value = '';

        if(data.weather[0].main ==='Clouds'){
           weatherIcon.src = 'images/clouds.png'
        }
        else if(data.weather[0].main ==='Clear'){
          weatherIcon.src = 'images/clear.png'
        }
        else if(data.weather[0].main ==='Rain'){
            weatherIcon.src = 'images/rain.png'
        }
        else if(data.weather[0].main ==='Drizzle'){
          weatherIcon.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main ==='Mist'){
          weatherIcon.src = 'images/mist.png'
        }
  }

  document.querySelector('.search-icon')
    .addEventListener('click', () => {
      const city = document.querySelector('.info').value.trim(); 
      weather(city);
    });