// function MergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return merge(MergeSort(left),MergeSort(right))
// }
// function merge(left,right){
//     let sort=[]
//     while (left.length&&right.length) {
//         if(left[0]>right[0]){
//             sort.push(right.shift())
//         }else{
//             sort.push(left.shift())
//         }

//     }
//     return [...sort,...left,...right]
// }

function MergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(MergeSort(left),MergeSort(right))
}
function merge(left,right){
    let sorted=[]
    while (left.length&&left.length) {
        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{

            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}
const arr=[9,2,1,3,4,5,-1]
console.log(MergeSort(arr));