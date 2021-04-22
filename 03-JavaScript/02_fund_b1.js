function array255(){
    x=[]
    for(var i=1; i<=255; i++) {
        x.push(i);
    }
    return x;
}

function sumpares1000(){
    sum=0
    for(var i=1; i<=1000; i++) {
        if (i%2 == 0){
            sum+=i;
        }
    }
    return sum;
}

function sumipares5000(){
    sum=0
    for(var i=1; i<=5000; i++) {
        if (i%2 != 0){
            sum+=i;
        }
    }
    return sum;
}

function sumarray(x){
    sum=0
    for(var i=0; i<x.length; i++) {
        sum+=x[i];
    }
    return sum;
}

function maxarray(x) {
    max = x[0];
    for(var i=0; i<x.length; i++) {
        if (max < x[i]){
            max = x[i];
        }
    }
    return max;
}

function avgarray(x){
    sum=0
    for(var i=0; i<x.length; i++) {
        sum+=x[i];
    }
    return sum/x.length;
}

function imparesarray(){
    array=[]
    for(var i=1; i<=50; i++) {
        if (i%2 != 0){
            array.push(i);
        }
    }
    return array;
}

function maxy(x,y) {
    y = y;
    for(var i=0; i<x.length; i++) {
        if (y < x[i]){
            console.log(x[i]);
        }
    }
}

function squarearray(x) {
    array=[]
    for(var i=0; i<x.length; i++) {
        array.push(x[i]**2);
    }
    return array;
}

function negtozero(x){
    for(var i=0; i<x.length; i++) {
        if (x[i]<0){
            x[i]=0;
        }
    }
    return x;
}

function maxminavg(x){
    max=x[0];
    min=x[0];
    sum=0
    for(var i=0; i<x.length; i++) {
        if (x[i]>max){
            max=x[i];
        }
        if (x[i]<min){
            min=x[i];
        }
        sum+=x[i]
    }
    array=[max,min,sum/x.length];
    
    return array;
}

function alreve(x) {
    array=[]
    for(var i=x.length-1; i>=0; i--) {
        array.push(x[i]);
    }
    return array;
}

function negtodojo(x){
    for(var i=0; i<x.length; i++) {
        if (x[i]<0){
            x[i]="Dojo";
        }
    }
    return x;
}