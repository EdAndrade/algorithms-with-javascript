function isPrime(n){
    for(let i = 1; i <= n; i++){
        if(i !== 1 && i !== n && n%i === 0) return false;
    }
    return true
}

console.log(isPrime(5))

// THE BIG O is LINEAR ----- O(n)

function isPrime2(n){
    if(n < 2){ return false };

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}


console.log(isPrime2(5))

// BIG-O = O(sqrt(n))