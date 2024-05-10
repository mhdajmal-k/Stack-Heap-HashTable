function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}

const arr=[4,3,5,2,1]
console.log(quickSort(arr))