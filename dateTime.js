'use strict';

function dayName(date) {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return daysOfTheWeek[date.getDay()];
}

function greetUser(date) {
    alert(`Hey User!! Happy ${dayName(date)}`);
}