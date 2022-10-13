function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(1, 10);


function getMaxLength(str, maxlength) {
  if (str.length < maxlength) {
    return true;
  } else {
    return false;
  }
}
getMaxLength('', 4 );
