const getRandomInt = (startRange, endRange) => {
  if (startRange < 0 && endRange < 0) {
    return -1;
  }
  if (startRange > endRange) {
    [startRange, endRange] = [endRange, startRange];
  }
  if (startRange < 0) {
    startRange = 0;
  }
  if (endRange < 0) {
    endRange = 0;
  }
  startRange = Math.ceil(startRange);
  endRange = Math.floor(endRange);
  if (startRange > endRange) {
    return -1;
  } else {
    return Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
  }
};
const isNotMaxLengthString = (verifiedString, maximumLength) => (verifiedString.length <= maximumLength);

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= max - min + 1) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {
  getRandomInt,
  isNotMaxLengthString,
  createRandomIdFromRangeGenerator
};
