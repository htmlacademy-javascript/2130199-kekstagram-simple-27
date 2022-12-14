const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomArrayElement(array){
  return array[getRandomPositiveInteger(0, array.length - 1)];
}


function checkStringMaxLength(str, maxlength) {
  return str.length <= maxlength;
}


export {getRandomArrayElement, getRandomPositiveInteger, checkStringMaxLength};


