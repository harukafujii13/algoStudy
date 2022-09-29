//return true if the array of number is sorted in ascending order else return false
//consider that there are no duplicated numbers

//1
function isSortedAsc(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false
        }
    }
    return true
    
}

console.log(isSortedAsc([]))
console.log(isSortedAsc([1,2,3,4,5]))
console.log(isSortedAsc([1,2,7,4,5]))


//2
const isSortatedAsc =  (arr) => arr.every((value, index, arr) => {
    console.log(value);
    console.log(index);
    console.log(arr);

})

console.log(isSortedAsc([1,2,3,4,5]))
console.log(isSortedAsc([1,2,7,4,5]))


//3
const isSoratedAsc =  (arr) => arr.every((value, index, arr) => {
    return arr[index - 1] <= value || !index
})

console.log(isSortedAsc([1,2,3,4,5]))
console.log(isSortedAsc([1,2,7,4,5]))

