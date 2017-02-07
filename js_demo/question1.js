//Print all possible solutions to the question a^3 + b^3 = c^3 + d^3
//where a b c d are intergers between 1 and 1000
function solution(num){
  let count = 0;
  for(let a = 1; a <= num; a++){
     for (let b = 1; b <= num; b++){
       for (let c = 1; c <= num; c++){
         for (let d = 1; d <= num; d++){
          if((Math.pow(a,3) + Math.pow(b,3)) === (Math.pow(c,3) + Math.pow(d,3))) {
            count++;
            console.log(a,b,c,d);
            break;
          }
         }
       }
     }
  }
 return `we found ${count} solutions.`;
}
console.log(solution(num)); // => (1, 1, 1, 1), ()



function solution(num){
  var sum = 0;
  for(let a = 1; a <= num; a++){
     for (let b = 1; b <= num; b++){
       sum = Math.pow(a, 3) + Math.pow(b,3);
       console.log(sum, a, b);
     }
  }
}
console.log(solution(num)); // => (1, 1, 1, 1), ()

a = 1
a^3 = 1

b = 1
b^3 = 1

2

c=1
c^3 = 1

d = 1
d^3 = 1

2 = 2
