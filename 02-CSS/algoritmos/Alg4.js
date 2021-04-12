function greaterthan(x,y){
    sum=0;
    for(var i=0; i<x.length; i++) {
        if (x[i]>y){
            sum+=1;
        }
    }
    console.log(sum);
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
    console.log(max);
    console.log(min);
    console.log(sum/x.length);
}

function negtodojo(x){
    for(var i=0; i<x.length; i++) {
        if (x[i]<0){
            x[i]="Dojo";
        }
    }
    console.log(x);
}

function cutarray(x,a,b){
    y=[]
    for(var i=0; i<x.length; i++) {
        if (i<a || i>b){
            y.push(x[i]);
        }
    }
    console.log(y);
}

