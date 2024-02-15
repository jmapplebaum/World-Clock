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
  let londonElement = document.querySelector("#London");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonFormat = moment().tz("Europe/London");

  londonDate.innerHTML = londonFormat.format("MMMM Do YYYY");
  londonTime.innerHTML = londonFormat.format("h:mm:ss [<small>]A[</small>]");

  let telAvivElement = document.querySelector("#Tel-Aviv");
  let telAvivDate = telAvivElement.querySelector(".date");
  let telAvivTime = telAvivElement.querySelector(".time");
  let telAvivFormat = moment().tz("Israel");

  telAvivDate.innerHTML = telAvivFormat.format("MMMM Do YYYY");
  telAvivTime.innerHTML = telAvivFormat.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
