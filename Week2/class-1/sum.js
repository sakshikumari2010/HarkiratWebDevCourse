function square(n){
    return n * n;
}

function cube(n){
    return n*n*n;
}

function average(a,b){
    return (a+b)/2;
}

function main(){
    let num = 2;
    let squ = square(num);
    console.log(squ);
    console.log(cube(num));
    console.log(average(num,num));
}

function sumofSomething(a,b,callbackFn){
    let num1 = callbackFn(a);
    let num2 = callbackFn(b);
    return num1 + num2;
}
let ans = sumofSomething(2,3,square);
console.log(ans);
// main()