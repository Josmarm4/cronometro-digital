let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        interval = setInterval(updateTimer, 1000); // Atualiza a cada 1 segundo (1000ms)
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').textContent = formatTime(0, 0, 0);
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return (
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds)
    );
}

// Eventos para os botões
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
