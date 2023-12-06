'use strict';

const formatName = (name) => {
    const trimmedName = name.trim();
    return trimmedName[0].toUpperCase() + trimmedName.substring(1);
}

const isMorning = (date) => {
    return date.getHours() === 12 && date.getMinutes() === 0
        || date.getHours() >= 6 && date.getHours() < 12;
}
class Greeter {
    greet(name, date=new Date()) {
        if (isMorning(date)) {
            return `Good morning ${formatName(name)}`;
        }
        return `Hello ${formatName(name)}`;
    }
}

module.exports = Greeter;
