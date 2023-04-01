let homeScore = 0;
let guestScore = 0;
let period = 0;

let periodTimeInMinutes = 10;
let timeLeft = periodTimeInMinutes * 60; //time in seconds
let timerInterval;

let timeTextBox = document.getElementById("time-box");
let startStopBtn = document.getElementById("start-stop-btn");
let periodTextBox = document.getElementById("period-txt");
let homeScoreTextBox = document.getElementById("scoreHome");
let guestScoreTextBox = document.getElementById("scoreGuest");


//Period
function periodAddOrRemove(addOrRemove) {
    if ((addOrRemove === "add") && (period < 9)) {
        period += 1;
    }
    if ((addOrRemove === "remove") && (period > 0)) {
        period -= 1;
    }
    periodTextBox.textContent = period;
}

//Score
function addScore(who, value) {
    if (who === "HOME") {
        homeScore += value;
        homeScoreTextBox.textContent = homeScore;
    }

    if (who === "GUEST") {
        guestScore += value;
        guestScoreTextBox.textContent = guestScore;
    }
}

//Time
function timeCounter() {
    if (timerInterval) {
        // Zatrzymujemy interwał
        clearInterval(timerInterval);
        timerInterval = null;
        startStopBtn.textContent = 'Start';
    } else {
        // Tworzymy nowy interwał
        timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timeTextBox.textContent = formattedTime;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                startStopBtn.textContent = 'Start';
            }
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
}

function resetTime() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = periodTimeInMinutes * 60;
    const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`;
    timeTextBox.textContent = formattedTime;
    startStopBtn.textContent = 'Start';
}