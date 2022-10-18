function quickSort(array){
    if(array.length < 2){
        return array
    }
    let pivot = array[array.length - 1];
    let left = []
    let right = []

    for(let i =0; i < array.length-1; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 20, -2, 4, -6]));

//Worst case - O(n^2)
//Avg case - 0(nlogn)