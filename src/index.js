module.exports = function solveEquation(equation) {
  // your implementation

equation = equation.replace(/\s/g, '');

var numbers = equation.match(/-?\d+/g);

var a, b, c;
var arr = [];

a = numbers[0];
b = numbers[2];
c = numbers[3];

var d = Math.pow(b,2) - 4*a*c;
if ( d > 0)
{
  var root1, root2, a1;
  root1 = Math.round((-b - Math.sqrt(d))/(2*a));
  root2 = Math.round((-b + Math.sqrt(d))/(2*a));
}

arr.push(root1);
arr.push(root2);
function compareNumbers(a, b) {
  return a - b;
}
arr.sort(compareNumbers);
return arr;
}
