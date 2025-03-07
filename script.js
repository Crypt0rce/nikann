// Простой таймер обратного отсчета
function updateCountdown() {
    const countdownDate = new Date("2025-05-03T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем элементы на странице
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Обновляем обратный отсчет каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();
