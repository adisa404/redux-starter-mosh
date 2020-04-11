// import { pipe } from 'lodash/fp';

// const pickProp = obj.tag;
// const bracket = (str) => `(${str})`;
// const stringLowercase = (str) => str.toLower();

// const convert = pipe(pickProp, stringLowercase, bracket);
// console.log(convert({ tag: 'JAVASCRIPT' }));

//Write code in a functional style to
//convert the input to the output:
//input = { tag: “JAVASCRIPT” }
//output = “(javascript)”
import { pipe } from 'lodash/fp';

const pickTag = (obj) => obj.tag;
const toLowerCase = (str) => str.toLowerCase();
const bracketify = (str) => `(${str})`;

const transform = pipe(pickTag, toLowerCase, bracketify);

const output = transform({ tag: 'JAVASCRIPT' });
console.log(output);
