'use strict';

const Greeter = require('./greeter.js')

const GREETER_CONFIG = [
  [0, 0, 'Good night'],
  [6, 0, 'Good morning'],
  [12, 1, 'Hello'],
  [18, 0, 'Good evening'],
  [22, 1, 'Good night'],
]

describe('The name is cleaned up before printing', () => {
  test.skip.each([
    ['World', 'Hello World'],
    ['  Lucia   ', 'Hello Lucia'],
    ['world', 'Hello World'],
  ])('returns %s given %s as input', (input, expected) => {
    const greeter = new Greeter();

    const result = greeter.greet(input, new Date(2020, 1, 1, 13));

    expect(result).toBe(expected);
  });
});

describe('The greeting changes depending on the time of day', () => {
  test.each([
    ['00:00', 'Good night World'],
    ['05:59', 'Good night World'],
    ['06:00', 'Good morning World'],
    ['11:05', 'Good morning World'],
    ['12:00', 'Good morning World'],
    ['12:01', 'Hello World'],
    ['17:59', 'Hello World'],
    ['18:00', 'Good evening World'],
    ['22:00', 'Good evening World'],
    ['22:01', 'Good night World'],
    ['23:59', 'Good night World'],
  ])('when current time is %s return %s', (currentTime, expected) => {
    const greeter = new Greeter();
    const [hour, minute] = currentTime.split(':');

    const result = greeter.greet('World', new Date(2020, 1, 1, hour, minute));

    expect(result).toBe(expected);
  });
});

