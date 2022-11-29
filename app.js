const clock = document.querySelector(".clock");
const currentDay = document.querySelector(".day");
const currentDate = document.querySelector(".date");

//Add zero if number is only one digit
function addZero(time) {
  return time < 10 ? "0".concat(time) : time;
}

//Digital clock
function getTime() {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  let date = new Date();
  let today = date.getDay();
  let weekday = day[today];
  let dateIndex = date.getUTCDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let monthIndex = date.getMonth();
  let month = months[monthIndex];
  let time = addZero(hour) + " : " + addZero(minutes);

  clock.textContent = time;
  currentDay.textContent = weekday;
  currentDate.textContent = dateIndex + " " + month;
  setTimeout(getTime, 1000);
}

getTime();
