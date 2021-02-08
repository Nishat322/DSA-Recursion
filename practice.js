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