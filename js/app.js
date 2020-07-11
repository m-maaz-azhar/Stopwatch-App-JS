// Defining Variables

let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval = null;
let status = 'stopped';
let display = document.getElementById('timer');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

// Start / Stop Function

startStopBtn.addEventListener('click', () => {
    if (status === "stopped") {
        status = "started";
        interval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerText = "STOP";
        startStopBtn.style.backgroundColor = 'red';
    } else {
        status = "stopped"
        window.clearInterval(interval);
        startStopBtn.innerText = "RESUME";
        startStopBtn.style.backgroundColor = 'orange';
    }
});

// Reset Stop Watch Function

resetBtn.addEventListener('click', () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(interval);
    display.innerText = '00:00:00';
    startStopBtn.innerText = "START";
    startStopBtn.style.backgroundColor = 'orange';
});

// Stop Watch Funtion

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        displaySeconds = `0${seconds.toString()}`;
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = `0${minutes.toString()}`;
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = `0${hours.toString()}`;
    } else {
        displayHours = hours;
    }

    display.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}