function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for(var i = 0; i < x.length; i++){
        if(mayorHastaAhora<x[i]){
            mayorHastaAhora=x[i]
        }
    }
    
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11