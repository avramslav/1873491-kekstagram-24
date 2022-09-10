const getRandomInt = (startRange, endRange) => {
  if (startRange<0 && endRange<0) {
    return 'Неверные данные';
  }
  if(startRange>endRange){[startRange, endRange] = [endRange, startRange];}
  if (startRange<0) {
    startRange = 0;
  }
  if (endRange<0){
    endRange = 0;
  }
  startRange = Math.ceil(startRange);
  endRange = Math.floor(endRange);
  if (startRange > endRange){
    return 'Диапазон не содержит целочисленные значения';}
  else {
    return Math.floor(Math.random() * (endRange - startRange +1))+ startRange;
  }
};
const isNotMaxLengthString = (verifiedString, maximumLength) => (verifiedString.length <= maximumLength);
isNotMaxLengthString('kuyvrfjikuy',6);
getRandomInt(2,8);
