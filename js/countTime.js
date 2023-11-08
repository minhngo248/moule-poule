$(document).ready(function() {
    var startDate = new Date('2022-02-27T00:00:00');

    function updateCountdown() {
        var currentDate = new Date();
        var timeDifference = currentDate - startDate;
        var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
        timeDifference -= years * (1000 * 60 * 60 * 24 * 365.25);
        var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
        timeDifference -= months * (1000 * 60 * 60 * 24 * 30.44);
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // console.log(years, months, days);
        document.getElementById('years').innerHTML = years.toString();
        document.getElementById('months').innerHTML = months.toString();
        document.getElementById('days').innerHTML = days.toString();
    }

    setInterval(updateCountdown, 500);
});