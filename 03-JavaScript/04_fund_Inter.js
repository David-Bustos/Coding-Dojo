function sigma(x){
    sig=0;
    for (var i=1; i<=x; i++){
        sig+=i;
    }
    return sig;
}

function factorial(x){
    fac=1;
    for (var i=1; i<=x; i++){
        fac*=i;
    }
    return fac;
}

function fibonacci(x){
    let fibo=[0,1];
    for (let i=2; i<=x; i++){
        fibo[i]=fibo[i-2]+fibo[i-1];
    }
    console.log('El valor de F('+x+') es')
    return fibo[x];
}

function penultimo(arr){
    if (arr.length<2){
        pen='null';
    }
    else {pen=arr[arr.length-2];}
    return pen;
}

function penultimo(arr){
    if (arr.length<2){
        pen='null';
    }
    else {pen=arr[arr.length-2];}
    return pen;
}

function n_ultimo(arr,x){
    if (arr.length<2){
        n='null';
    }
    else {n=arr[x];}
    return n;
}

function secondmax(arr){
    if (arr.length<2){
        sm='null';
    }
    else {
        x=arr.sort();
        sm=x[x.length-2];
    }
    return sm;
}

function doblepar(arr) {
    par=[];
    for(var i=0; i<arr.length; i++) {
        par.push(arr[i]);
        par.push(arr[i]);
    }
    return par;
}