// Print all possible positive integer solutions to the equation a3 + b3 = c3 + d3
// where a b c d are integers between 1 and 1000

// Brute force solution: O(N^4)
function cubes(num) {
  let count = 0;
  for(let a = 1; a <= num; a++) {
    for(let b = 1; b <= num; b++) {
      for(let c = 1; c <= num; c++) {
        for(let d = 1; d <= num; d++) {
          if ((Math.pow(a, 3) + Math.pow(b, 3)) == (Math.pow(c, 3) + Math.pow(d, 3))) {
            count++;
            console.log(a, b, c, d);
          }
        }
      }
    }
  }

  return `Found ${count} solutions.`;
}

O(N^2)

function cubes(num) {
  'use strict';

  let count = 0;
  let lookup = {};
  let pairs = '';
  let seen;

 for(let c = 1; c <= num; c++) {
     for(let d = 1; d <= num; d++) {
       let result = Math.pow(c, 3) + Math.pow(d, 3);
       if (lookup[result.toString()]) {
         lookup[result.toString()] = Object.assign(lookup[result.toString()], { 'two': {c, d} });
       } else {
         lookup[result.toString()] = { 'one': {c, d} };
       }
     }
  }

  for(let result in lookup) {
    if(lookup.hasOwnProperty(result)) {
      if (lookup[result].two) {
        count += 4;
        pairs += `(${lookup[result].one.c}, ${lookup[result].one.d}, ${lookup[result].one.c}, ${lookup[result].one.d})\n`;
        pairs += `(${lookup[result].one.c}, ${lookup[result].one.d}, ${lookup[result].two.c}, ${lookup[result].two.d})\n`;
        pairs += `(${lookup[result].one.d}, ${lookup[result].one.c}, ${lookup[result].one.c}, ${lookup[result].one.d})\n`;
        pairs += `(${lookup[result].one.d}, ${lookup[result].one.c}, ${lookup[result].two.c}, ${lookup[result].two.d})\n`;
      } else {
        count++;
        pairs += `(${lookup[result].one.c}, ${lookup[result].one.d}, ${lookup[result].one.c}, ${lookup[result].one.d})\n`;
      }
    }
  }

  return `Found ${count} as follows:
  ${pairs}`;
}

console.log(cubes(4));
