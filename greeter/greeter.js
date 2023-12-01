'use strict';

const formatName = (name) => {
    const trimmedName = name.trim();
    return trimmedName[0].toUpperCase() + trimmedName.substring(1);
}
class Greeter {
    greet(name) {
        console.log(new Date().toLocaleString());
        return `Hello ${formatName(name)}`;
    }
    
}

module.exports = Greeter;
