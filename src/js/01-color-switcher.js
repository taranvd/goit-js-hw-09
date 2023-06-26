const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;
let isActive = false;

startButton.addEventListener('click', disableButtonAndStartInterval);

stopButton.addEventListener('click', stopIntervalAndEnableButton);

function disableButtonAndStartInterval() {
  startButton.disabled = true;
  stopButton.disabled = false;
  if (isActive) {
    return;
  }
  intervalId = setInterval(() => {
    isActive = true;
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopIntervalAndEnableButton() {
  clearInterval(intervalId);
  isActive = false;
  startButton.disabled = false;
  stopButton.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
