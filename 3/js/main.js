const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

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

const postDescriptions = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];


function generatePost(_, index){
  return {
    id: index + 1,
    url: `photos${index + 1}.jpg`,
    description: getRandomArrayElement(postDescriptions),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS),
  };
}

console.log(Array.from({length:25}, generatePost ));
