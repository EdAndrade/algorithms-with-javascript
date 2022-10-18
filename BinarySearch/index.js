function binarySearch(array, target){
    let leftIndex = 0
    let rightIndex = array.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === array[middleIndex]){
            return middleIndex
        }

        if(target < array[middleIndex]){
            rightIndex = middleIndex -1;
        }else{
            leftIndex = middleIndex +1;
        }
    }

    return -1;
}

//BIG O ---- (log4n + 2)

//RULE --- THE ARRAY NEED TO BE SORTED
console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))