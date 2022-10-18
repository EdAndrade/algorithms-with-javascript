function bubbleSort(array){
    let swapped;

    do{
        let pivot = 0;
        swapped = false;
        for(let i = 0; i < array.length; i++){
            if(!!array[i+1] && array[i] > array[i+1]){
                pivot = array[i+1]
                array[i+1] = array[i]
                array[i] = pivot;
                swapped = true;
            }
        }
    }while(swapped !== false)

    return array;
}

console.log(bubbleSort([4,3,2,1]))
console.log(bubbleSort([4,3,1,2]))
console.log(bubbleSort([1,2,3,4]))
console.log(bubbleSort([-15, 20, 8, -2, 4]))
console.log(bubbleSort([-6, 0, 8, -2, 4, 1, 2, 3]))
console.log(bubbleSort([-6, 20, 8, -2, 4, -1, -3, -4, 7, 9]))

//BIG O ----- (n^2+5)