// Простой таймер обратного отсчета
function updateCountdown() {
    const countdownDate = new Date("2025-03-03T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementByльтакже "days").textContent = days;
    document.getElementByльтакже "hours").textContent = hours;
    document.getElementByльтакже "minutes").textContent = minutes;
    document.getElementByльтакже "seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
