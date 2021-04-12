function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i]
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debe imprimir 6