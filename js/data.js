import {createRandomIdFromRangeGenerator,getRandomInt} from './util.js';

const PERSON_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Лолита',
  'Вашингтон',
  'Артём',
  'Пётр',
];
const DESCRIPTION_PHOTO = [
  'На пляже озера в санатории',
  'Деревянная вывеска к пляжу',
  'Море, солнце и песок',
  'Девушка с фотоаппаратом на берегу',
  'Рыбное блюдо',
  'Чёрный спорткар',
  'Клубника на деревянном блюдечке',
  'Виноградный сок',
  'Пролетающий самолет над отдыхающими на пляже',
  'Полочка для обуви',
  'Дорога к пляжу',
  'Белый ауди',
  'Рыбное блюдо с овощами',
  'Завернутый в ткани котик',
  'Тряпочные тапки робота',
  'След самолета в небе',
  'Пение хора с инструментальным сопровождением',
  'Раритетный автомобиль красного цвета',
  'Тапочки со встроенным фонариком',
  'Пальмовая аллея рядом с гостиницей',
  'Рыбный салат с зеленью',
  'Закат солнца на берегу моря',
  'Краб в береговых зарослях',
  'Ночной концерт в самом разгаре',
  'Бегемот устрашающе выглядит из воды',
];
const CommentsRange = {
  MIN: 1,
  MAX: 4,
};
const CountLikesRange = {
  MIN: 15,
  MAX: 200,
};
const CommentIdRange = {
  MIN: 11,
  MAX: 300,
};
const DescriptionIDRange = {
  MIN: 1,
  MAX: 25,
};
const AvatarIDRange = {
  MIN: 1,
  MAX: 6,
};

const descriptionID = createRandomIdFromRangeGenerator(DescriptionIDRange.MIN, DescriptionIDRange.MAX);
const commentId = createRandomIdFromRangeGenerator(CommentIdRange.MIN, CommentIdRange.MAX);
const countLikes = createRandomIdFromRangeGenerator(CountLikesRange.MIN, CountLikesRange.MAX);

const createCommentsForPerson = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInt(AvatarIDRange.MIN, AvatarIDRange.MAX)}.svg`,
  message: MESSAGES[getRandomInt(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInt(0, NAMES.length - 1)],
});
const createDataOfPerson = () => {
  const id = descriptionID();
  const comments = Array.from({length: getRandomInt(CommentsRange.MIN, CommentsRange.MAX)}, createCommentsForPerson);
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTION_PHOTO[id - 1],
    likes: countLikes(),
    comments: comments,
  };
};
const getRandomDatesOfPerson=(length)=>Array.from({length: length}, createDataOfPerson);

export {PERSON_COUNT,getRandomDatesOfPerson};
