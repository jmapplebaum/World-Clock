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
