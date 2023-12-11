const API_KEY = `e1e82e77dec3247ee9679c298bb8f2d6`;
const city = document.getElementById("search");
const form = document.getElementById("form1");
const whether = document.getElementById('whether')

//to get the whether details
async function getWhether(city) {
  whether.innerHTML = `Loading...`
  let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  let response = await raw.json();
  return showWeather(response)
}

//to show the whether details

const showWeather = function(response){
  if(response.cod == 404){
    whether.innerHTML = `<h1>City Not Found</h1>`
    return;
  }
  console.log(response)
  whether.innerHTML = `
  <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png" alt="clouds">
  <div>
      <h1>${response.main.temp}</h1>
      <h4>${response.weather[0].main}</h4>
  </div>`

}

//to stop form from reloading
form.addEventListener("submit", function (e) {
  getWhether(city.value);
  e.preventDefault();
});
