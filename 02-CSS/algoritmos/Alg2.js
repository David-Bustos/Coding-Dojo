// **Breve Lección**
// R1 Dojo
// R2 hello, x is 15
// R3 n is 3, x is 18
// R4 n is 3, n is 5, x is 16
// R5 c is 5, c is 8, x is 13
// R6 c is 5, c is 3, c is 6, c is 3, c is 5, c is 8, x is 19
// R7 15, 10

// **Actividad**
// Digramas T (Imagen Adjunta)

// **Parte 2**
function printUpTo(x) {
  if (x>0){
    for(var i=1; i<=x; i++) {
      console.log(i);
  }
  }
  else{
    console.log(false);
  }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // 

function printSum(x) {
  var sum = 0;
  for(var i=0; i<=x; i++) {
    sum+=i
    console.log(i);
    console.log(sum);
  }
  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640

function printSumArray(x) {
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum+=x[i]
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6

// **Bonus**
function LargestElement(x) {
  var max = x[0];
  for(var i=0; i<x.length; i++) {
    if (max < x[i]){
      max = x[i]
    }
  }
  return max;
}
console.log( LargestElement([15,27,13,7]) ); // debería imprimir 27


