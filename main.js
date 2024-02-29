// Calculate a date 10 days from now
const storeOpening = new Date(); 
storeOpening.setDate(storeOpening.getDate() + 10); // Add 10 days

setCountdown(storeOpening); 

// Calls setCountdown every second:
setInterval(function() {
  setCountdown(storeOpening);
}, 1000);

function setCountdown(countingDownTime) {
  let now = new Date();
  let timeRemaining = countingDownTime - now;

  // Seconds
  let seconds = Math.floor(timeRemaining / 1000);
  // Minutes
  let minutes = Math.floor(timeRemaining / (1000 * 60));
  // Hours
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  // Days
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Now subtract the bigger units of the time from the smaller ones
  let daysToDisplay = days;
  let hoursToDisplay = hours - (days * 24);
  let minutesToDisplay = minutes - (hours * 60);
  let secondsToDisplay = seconds - (minutes * 60);

  // Print to DOM
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  daysEl.textContent = daysToDisplay;
  hoursEl.textContent = hoursToDisplay;
  minutesEl.textContent = minutesToDisplay;
  secondsEl.textContent = secondsToDisplay;
}
