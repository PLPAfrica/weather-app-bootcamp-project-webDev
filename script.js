// function greet(){
//     alert("Good evening PLP Web devlopers")
// }

let inputValue = document.querySelector(".search-box")
let button = document.querySelector(".search-button")
let city = document.querySelector(".location .city")
let date = document.querySelector(".location .date")
let temp = document.querySelector(".current .temp")
let description = document.querySelector(".current .weather")

button.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=7c8f62dbda24cac602674435cacf4e41`)
        .then((response) => response.json())
        .then(displayData)
        .catch((err) => alert("Please Enter a Correct City Name"))
})

const displayData = (weather) => {
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date()
    date.innerText = dateBuilder(now);
    temp.innerHTML = `${Math.round(weather.main.temp)}℃`;
    description.innerText = `${weather.weather[0].description}`;
}


function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${date} ${month} ${year}`;
  }
  
