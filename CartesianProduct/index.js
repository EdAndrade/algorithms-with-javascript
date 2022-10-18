function CartesianProduct(array1, array2){
    let result = []
    array1.forEach( (el1) => {
        for(let i = 0; i < array2.length; i++){
            result.push([el1, array2[i]])
        }
    })
    return result
}

console.log(CartesianProduct([1,2], [3, 4, 5]));

//BIG O ---- (m.n)