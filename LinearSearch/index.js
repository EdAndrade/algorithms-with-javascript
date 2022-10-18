function LinearSearch(array,n){
    for(let i = 0; i < array.length; i++){
        if(array[i] === n) return i;
    }
    return -1;
}

console.log(LinearSearch([-5, 2, 10, 4, 6], 10))
console.log(LinearSearch([-5, 2, 10, 4, 6], 6))
console.log(LinearSearch([-5, 2, 10, 4, 6], 20))

//THE BIG O ----- (n)