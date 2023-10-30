function getValue(d, timePart) {
    var val = 0;
    switch (timePart) {
        case "days":
            var targetDate = new Date("2023-11-05T06:15:00");
            val = Math.floor((targetDate - d) / (1000 * 60 * 60 * 24));
            break;
        case "hours":
            val = 23 - d.getHours();
            break;
        case "minutes":
            val = 59 - d.getMinutes();
            break;
        case "seconds":
            val = 59 - d.getSeconds();
            break;
        default:
            break;
    }
    return val.toString().padStart(2, '0');
}

function updateClock() {
    var currentDate = new Date();
    var d = new Date("2023-11-05T06:15:00");

    var days = getValue(currentDate, "days");
    var hours = getValue(currentDate, "hours");
    var minutes = getValue(currentDate, "minutes");
    var seconds = getValue(currentDate, "seconds");

    document.getElementById("clock").innerHTML = days + " days " + hours + ":" + minutes + ":" + seconds;
}

function init() {
    setInterval(updateClock, 1000);
}

init();
