/* eslint-disable */
'use strict';

/****************************Counting Sheep***************************/
function countingSheep(num){
    if(num === 0){
        return console.log('All sheep jumped over the fence')
    }

    console.log( num, ': Another sheep jumps over the fence')
    countingSheep(num - 1)
}

countingSheep(3)

/****************************Power Calculator***************************/
function powerCalculator(base, exp){
    if(exp < 0){
        return console.log( 'exponent should be >= 0')
    }
    if(exp === 0){
        return 1
    }
    if(exp === 1){
        return base
    }

    return base * powerCalculator(base, exp-1)
}

console.log(powerCalculator(10, 1))