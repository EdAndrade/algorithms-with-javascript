function recursiveFactorial(n,acc=1){
    if(n === 0) return acc;
    return recursiveFactorial(n-1,acc*n)
}

function recursiveFactorial2(n){
    if(n === 0) return 1;
    return n*recursiveFactorial2(n-1)
}

//FOR BOTH SOLUTION, BIG O ----- (n+1)

console.log(recursiveFactorial(2))