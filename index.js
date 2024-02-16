function showCurrentTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", showCurrentTime);

//
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
