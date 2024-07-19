//RECURSION
//exercise 2:
function inverseWeirdDivision(n) {
    if(n/3){
        console.log("Julia")
    } else if (n/5){
        console.log("James")
    }else if (n/3 && n/5) {
        console.log("JuliaJames")
    }else{
        console.log(n)-1
    }
    return inverseWeirdDivision(n)
}
//exercise 3 
function reverse(str) {
     str.split;
     return reverse(str);

}
//exerecise haha
function laugh(number) {
    if (number ===1){
        return "ha"
    }
    return "ha" + laugh(number-1)
}
//exercise factorial
function factorial(number) {
    if(number===0){
        return 1
    }
    return number*factorial(n-1)
}
//exercise fib
function fib(number) {
    if( number <= i){
        return 1
    } return fib (number-1) + fib(number-2)
}

function add(x) {
    const sum = (y) => add (x + y);
    sum.valueof=() => x;
    return sum; 
}


