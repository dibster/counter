'use strict'

const expect = require('expect');

const  counter = (state = 0, action) => {

    switch (action.type) {
        case 'increment' : return state + 1;
        case 'decrement' : return state - 1;
        default : return state;        
    }
}

expect(
  counter(0, {type : 'increment'})
).toEqual(1);

expect(
  counter(1, {type : 'decrement'})
).toEqual(0);


expect(
  counter(1, {type : 'something'})
).toEqual(1);

expect(
  counter(undefined, {type : 'something'})
).toEqual(0);





console.log('Passed');
