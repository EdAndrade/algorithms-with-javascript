function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        let numberToInsert = array[i];
        let sortedElementIndex = i - 1;

        while(sortedElementIndex >= 0 && array[sortedElementIndex] > numberToInsert){
            array[sortedElementIndex+1] = array[sortedElementIndex];
            sortedElementIndex -= 1;
            console.log(array)
        }
        array[sortedElementIndex+1] = numberToInsert;
    }
}

const array = [8,20,-2,4,-6]
console.log(insertionSort(array))
console.log(array)

//BIG O ----- (n^2)