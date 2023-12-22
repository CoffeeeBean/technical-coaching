'use strict';

const formatName = (name) => {
    const trimmedName = name.trim();
    return trimmedName[0].toUpperCase() + trimmedName.substring(1);
}

const isMorning = (date) => {
    return date.getHours() === 12 && date.getMinutes() === 0
        || date.getHours() >= 6 && date.getHours() < 12;
}

const isEvening = (date) => {
    return date.getHours() === 22 && date.getMinutes() === 0
    || date.getHours() >= 18 && date.getHours() < 22;
}

const isNight = (date) => {
    return date.getHours() >= 22 || date.getHours() < 6;
}
class Greeter {
    greet(name, date=new Date()) {
        if (isMorning(date)) {
            return `Good morning ${formatName(name)}`;
        } else if (isEvening(date)) {
            return `Good evening ${formatName(name)}`;
        } else if (isNight(date)) {
            return `Good night ${formatName(name)}`;
        }
        return `Hello ${formatName(name)}`;
    }
}

module.exports = Greeter;
