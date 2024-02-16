function updateTime() {
  let chicagoElement = document.querySelector("#Chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  let chicagoFormat = moment().tz("America/Chicago");

  chicagoDate.innerHTML = chicagoFormat.format("MMMM Do YYYY");
  chicagoTime.innerHTML = chicagoFormat.format("h:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#London");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonFormat = moment().tz("Europe/London");

  londonDate.innerHTML = londonFormat.format("MMMM Do YYYY");
  londonTime.innerHTML = londonFormat.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
//
function addCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-container");
  citiesElement.innerHTML = `<div class="cities" id="new-city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citiesSelect = document.querySelector("#cities-select");
citiesSelect.addEventListener("change", addCity);
