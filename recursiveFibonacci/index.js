function recursiveFibonacci(n, fiboArray=[0,1]){
    let fiboLen = fiboArray.length
    if(n===0) return 0;
    if(fiboLen-1 === n)
        return fiboArray[fiboLen-1]
    return recursiveFibonacci(n,fiboArray.concat([fiboArray[fiboLen-2]+fiboArray[fiboLen-1]]));
}

//BEST RECURSIVE FIBONACCI
//BIG O --- (4n-1)

function recursiveFibonacci2(n){
    if(n < 2) return n;
    return recursiveFibonacci2(n-1)+recursiveFibonacci2(n-2);
}

//WORST RECURSIVE FIBONACCI
//BIG O --- (2^n)


console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci2(6609))