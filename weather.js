


        //   RapidAPI   


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "56fd766854mshf81cc5bbd1e54eap16a02djsnb3b62ee79025",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

let currentWeather;
let country = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".hum");

    // To get current location 
  
let locationUrl =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_0Mrk39rLld9wNqoUlqO3emXLQlFIS&ipAddress";

let input = document.querySelector("input");
let btn = document.querySelector("button");

async function getData(city) {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const res = await fetch(url, options);
  const data = await res.json();
  currentWeather = data;
  country.innerText = currentWeather.name;
  temp.innerText = currentWeather.main.temp;
  humidity.innerText = currentWeather.main.humidity;
}

async function getLoction() {
  let res = await fetch(locationUrl);
  let data = await res.json();
  getData(data.location.city);
}

btn.onclick = function () {
  getData(input.value);
};

getLoction();

//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//    this is hw API looks like
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '56fd766854mshf81cc5bbd1e54eap16a02djsnb3b62ee79025',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
