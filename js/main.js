import './util.js';
import './data.js';
import {createArray} from './data.js';

// console.log(createArray());

function getRandomInteger(min, max) {

  if ((typeof min !== 'number' || typeof max !== 'number') || ((min === max) || (min > max) || (min < 0) || (max < 0))){
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger('',1);


function checkStringMaxLength(str, maxlength) {
  return str.length <= maxlength;
}
checkStringMaxLength('tretert', 4 );

