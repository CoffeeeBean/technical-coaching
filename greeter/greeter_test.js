'use strict';

const Greeter = require('./greeter.js')


describe('Greeter', () => {
    
    afterEach(() => {  jest.clearAllMocks(); });

    test.each([
      ['World', 'Hello World'],
      ['  Lucia   ', 'Hello Lucia'],
      ['world', 'Hello World'],
    ])('returns %s given %s as input', (input, expected) => {
      const greeter = new Greeter();

      const result = greeter.greet(input);
      
      expect(result).toBe(expected);
    });

    test('returns `Good morning <name>` when the time is 06:00-12:00 LocalTimeZone', () => {
      
        jest.spyOn(global, 'Date').mockImplementation(() => {
            return {
              getHours: () => 1,
            };
          });
        
        const greeter = new Greeter();
      

    });
  });

