let count = 0;

const countDisplay = document.getElementById("count");
const message = document.getElementById("message");

function updateCounter() {
    countDisplay.innerText = count;

    if (count > 0) {
        countDisplay.style.color = "#4ade80";
        message.innerText = "Great! Your count is positive.";
    } else if (count < 0) {
        countDisplay.style.color = "#f87171";
        message.innerText = "Your count is negative.";
    } else {
        countDisplay.style.color = "#a78bfa";
        message.innerText = "The counter is at zero.";
    }

    countDisplay.style.transform = "scale(1.1)";

    setTimeout(() => {
        countDisplay.style.transform = "scale(1)";
    }, 150);
}

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    if (count > 0) {
        count--;
    }
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}

function increaseByFive() {
    count += 5;
    updateCounter();
}
