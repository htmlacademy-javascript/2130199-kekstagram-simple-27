import {getRandomArrayElement} from './util.js';
import {getRandomPositiveInteger} from '/util.js';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 200;

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

const createArray = () => Array.from({length:25}, generatePost);

export {createArray};
