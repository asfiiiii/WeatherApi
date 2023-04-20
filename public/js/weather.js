
const btn = document.querySelector(".btn-1");
const city = document.querySelector(".city");
const text = document.querySelector(".text")
const desc = document.querySelector(".desc")


const wind = document.querySelector('.wind_p')
const hum = document.querySelector('.hum_p')
const img =  document.querySelector('#w_img')
const box =  document.querySelector('.box')


const features = document.querySelector('.weather_features')

btn.addEventListener('click', async()=>
{
    const cityval = city.value;
    if(cityval === '')
    {
        text.innerHTML = `Please Enter Area Name`;
    }
    else
    {
        try
        {
            
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=91175332339db4d19c7952c866e0118c`);
            const response = await res.json();
            console.log(response)
            box.style.height = "490px";
            text.innerHTML = `${response.main.temp} ℃ `;
            desc.innerHTML = ` ${response.weather[0].description}`;
            city.value = "";
            wind.innerHTML= `${response.wind.speed} Km/h `;
            hum.innerHTML= `${response.main.humidity} % `;
            features.style.display = "flex";
            switch(response.weather[0].main)
            {
                case 'Clear':
                {
                    img.src = 'images/clear.png';
                    break;
                }
                case 'Snow':
                {
                    img.src = 'images/snow.png';
                    break;
                }
                case 'Haze':
                {
                    img.src = 'images/mist.png';
                    break;
                }
                case 'Smoke':
                    {
                        img.src = 'images/mist.png';
                        break;
                    }
                case 'Clouds':
                {
                    img.src = 'images/cloud.png';
                    break;
                }
                case 'Rain':
                {
                    img.src = 'images/rain.png';
                    break;
                }
                default:
                {
                        img.src = 'images/not found.png';
                         break;
                         desc.innerHTML = `s`;
                }
            }
        }
        catch{
            text.innerHTML = `Invalid Location`;
            desc.innerHTML = ` Try again please`;
            img.src = 'images/not found.png';
            features.style.display = "none";
            city.value = "";


        }
    }
})

// var searchButton = document.getElementById("search-button");
//   var cityInput = document.getElementById("city-input");

//   searchButton.addEventListener("click", function() {
//     var city = cityInput.value;
//     console.log("User input: " + city);
//     // perform search or other action with city input here
//   });