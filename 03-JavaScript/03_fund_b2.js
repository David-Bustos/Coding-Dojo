function postobig(x){
    for(var i=0; i<x.length; i++) {
        if (x[i]>0){
            x[i]="big";
        }
    }
    return x;
}

function printminreturnmax(x){
    max=x[0];
    min=x[0];
    for(var i=0; i<x.length; i++) {
        if (x[i]>max){
            max=x[i];
        }
        if (x[i]<min){
            min=x[i];
        }
    }
    console.log(min);
    
    return max;
}

function printreturn(x){
    console.log(x[x.length-2]);
    for(var i=0; i<x.length; i++) {
        if (x[i]%2 != 0){
            return x[i];
        }
    }   
}

function doublearray(x) {
    array=[]
    for(var i=0; i<x.length; i++) {
        array.push(x[i]*2);
    }
    return array;
}

function countpos(x){
    count=0;
    for(var i=0; i<x.length; i++) {
        if (x[i]>0){
            count+=1;
        }
    }
    x[x.length-1]=count;

    return x;
}

function pareseimpares(x){
    countp=0;
    countn=0;
    for(var i=0; i<x.length; i++) {
        if (x[i]%2 == 0){
            countp+=1
            countn=0;
        }
        else{
            countn+=1
            countp=0;
        }
        // 3 cifras seguidas
        if (countp>=3){
            console.log('Es para bien!')
        }
        else if (countn>=3){
            console.log('Que Imparcial!')
        }
    }
    return x[i];  
}

function incremento(x){
    for(var i=0; i<x.length; i++) {
        if (x[i]%2 != 0){
            x[i]+=1;
        }
    }  
    return x;
}

function longorevias(x){
    array=[x[0]]
    for(var i=1; i<x.length; i++) {
        array.push(x[i-1].length);
    }
    return array;
}

function mas7(x){
    array=[]
    for(var i=0; i<x.length; i++) {
        array.push(x[i]+7);
    }
    return array;
}

function inverso(x){
    x.reverse()
    return x;
}

function inverso(x){
    x.reverse()
    return x;
}

function negative(x){
    if(x[i]>0){
        x[i]*=-1;
    }
    return x;
}

function comidahabriento(x){
    cont=0
    for(var i=0; i<x.length; i++) {
        if (x[i]== 'comida'){
            console.log('yummy')
            cont+=1
        }
    }
    if (cont==0){
        console.log('tengo hambre')
    }
}

function cambiahaciacentro(x){
    arr=x
    for(var i=0; i<x.length/2; i+=2) {
        arr[i]=x[x.length-(i+1)];
        arr[x.length-(i+1)]=x[i]
    }
    return arr;
}

function escarray(x,y) {
    for(var i=0; i<x.length; i++) {
        x[i]*=y;
    }
    return x;
}

