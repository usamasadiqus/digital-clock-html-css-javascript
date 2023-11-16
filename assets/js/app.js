const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
    let date = new Date();

    hours.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
    minutes.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    seconds.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
}, 1000);

