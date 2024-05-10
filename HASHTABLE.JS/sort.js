function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sorted=[]
    console.log(left);
    while(left.length&&right.length){

        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}

const arr=[5,3,2,4,1]
console.log(mergeSort(arr))