// POWERFUL STUFF
// VERY FEW PEOPLE KNOW THIS
// this is a formatting tool
// people will ask you this to test you
// its very handy and powerful and a really good things to know for interviews
//
// this to to format messages. you dont always want to reformat.
// to take out large chunks of text.
// perfect to sanitize blogs.


//Template Strings
//made with ES6
//browsersync is being used (browsersync.io cdn)

// function foo (strings, ...values){
//   var str = '';
        // vvv this is very important. this will bring the value of str together
//   for(let i = 0; strings.length; i++){
//     if(i>0) str += values[i-1];
//     str += strings[i];
//   }
//   console.log(str);
//   return str;
// }

function foo (strings, ...values){
  var str = '';
  for(let i = 0; i < strings.length; i++) {
    if (i>0){
      if (typeof values[i-1] == 'number'){
        str += values[i-1].toFixed(2)
      }else{
        str += values[i-1]
      }
    }
    str += strings[i];
  }
  return str;
}

var name = 'Lizza';
var orderNumber = '123';
var total = 319.7;

var msg = foo`Hello, ${name}, your order (${orderNumber} was $${total}.)`;

console.log(msg);
