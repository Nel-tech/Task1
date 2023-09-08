const currentUTCTime = Date.now();
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
utcTimeElement.textContent = currentUTCTime;

// Get the current date
const currentDate = new Date();

const Week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentIndex = currentDate.getDay();

const currentDay = document.querySelector("[data-testid=currentDayOfTheWeek]");
currentDay.textContent = Week[currentIndex];
