function imprimeHasta(x) {
    if(x<1){
        return 'false';
    }
    else{
        for(var i=1;i<=x;i++){
            console.log(i);
        }
    }	

}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(-10); 
console.log(y); // debe imprimir 'false'