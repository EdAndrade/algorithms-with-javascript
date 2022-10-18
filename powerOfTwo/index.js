function powerOfTwo(n){
    for(let i = 0; 2**i <= n; i++){
        if(2**i === n) return true;
    }
    return false
}

console.log(powerOfTwo(1024))

//BIG O --- O(logn)

function isPowerOfTwoBitWise(n){
    if( n < 1){ return false };
    return ( n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(1024))

//BIG O --- 0(1)