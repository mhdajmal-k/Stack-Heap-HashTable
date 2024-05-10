// function insertionSort(arr){
//     if(arr.length==0){
// return "array is empty"
//     }
//     for (let i = 1; i < arr.length; i++) {
//         let number=arr[i]
//         j=i-1
//         while (j>=0&&arr[j]>number) {
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=number
//     }
//     return arr
// }

// const arr=[1,-2,8,3,5,-100]
// console.log(insertionSort(arr))

function insertionSort(arr){
    if(arr.length==0){
        return "array is empty"
    }
    for(let i=1;i<arr.length;i++){
        let number=arr[i]
        j=i-1
        while(j>=0&&arr[j]>number){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=number
    }
    return arr
}


const arr=[4,3,2,5,1]
console.log(insertionSort(arr))