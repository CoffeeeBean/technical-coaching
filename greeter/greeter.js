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
    constructor(config) {
        this.config = config;
    }
    greet(name, date = new Date()) {
        let greeting = 'Hello';
        if (isMorning(date)) {
            greeting = 'Good morning';
        } else if (isEvening(date)) {
            greeting = 'Good evening';
        } else if (isNight(date)) {
            greeting = 'Good night';
        }
        return `${greeting} ${formatName(name)}`;
    }
}

module.exports = Greeter;
