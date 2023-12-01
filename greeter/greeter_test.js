'use strict';

const Greeter = require('./greeter.js')

test('should return Hello world given world as input', () => {
    const result =  Greeter.greet('world');
    expect(result).toBe('Hello world');
});
