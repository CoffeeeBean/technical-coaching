'use strict';

const Greeter = require('./greeter.js')


describe('Greeter', () => {    
    test.each([
      ['World', 'Hello World'],
      ['  Lucia   ', 'Hello Lucia'],
      ['world', 'Hello World'],
    ])('returns %s given %s as input', (input, expected) => {
      const greeter = new Greeter();

      const result = greeter.greet(input, new Date(2020, 1, 1, 13));
      
      expect(result).toBe(expected);
    });


    describe('return Good morning <name> when time is 06:00-12:00 LocalTimeZone', () => {
      test.each([
        ['05:59', 'Hello World'],
        ['06:00', 'Good morning World'],
        ['11:05', 'Good morning World'],
        ['12:00', 'Good morning World'],
        ['12:01', 'Hello World'],
      ])('when current time is %s return %s', (currentTime, expected) => {
        const greeter = new Greeter();
        const [hour, minute] = currentTime.split(':');
        
        const result = greeter.greet('World', new Date(2020, 1, 1, hour, minute));
        
        expect(result).toBe(expected);
      });
      
    });
    
  });

