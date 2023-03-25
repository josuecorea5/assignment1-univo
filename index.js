const { terricolas } = require('./terricolas.js');

const calculateTotalArrivedSalts = (name, planetNumber) => {
  let numberOfSalts = 0;

  if(planetNumber <= 10000) throw new Error('The planet number must be greater than 10000');

  while(planetNumber !== 1) {
    if(isEven(planetNumber)) {
      planetNumber = planetNumber / 2;
    } else {
      planetNumber = planetNumber * 3 + 1;
    }
    numberOfSalts++;
  }

  return `The ${name} took ${numberOfSalts} salts to arrive to the earth`;
}

const isEven = (number) => number % 2 === 0;

terricolas.forEach(terricola => {
 console.log( calculateTotalArrivedSalts(terricola.name, terricola.planet));
});