import {Factory} from 'ember-cli-mirage';

const MODELS = {
  0: 'E-class',
  1: 'S-class',
  2: 'C-class'
};

const COLORS = {
  0: 'Красный',
  1: 'Зеленый',
  2: 'Синий',
  3: 'Черный'
};

const BRANDS = {
  0: 'Mercedes Benz',
  1: 'Toyota',
  2: 'Lexus',
  3: 'Lada'
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Factory.extend({
  number: () => {
    return `A${getRandomInt(10, 999)}RU`
  },
  brand:  () => {
    return BRANDS[getRandomInt(0, 3)]
  },
  model:  () => {
    return MODELS[getRandomInt(0, 2)]
  },
  color:  () => {
    return COLORS[getRandomInt(0, 3)]
  },
  year:   () => {
    return getRandomInt(2000, 2020)
  }
});
