// function bubbleSort(arr){
//     let temp
//     let swap
//     do{
//         swap=false
//         for (let i = 0; i < arr.length; i++) {
//        if(arr[i]>arr[i+1]){
//         temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//         swap=true
//        }
//         }
//     }while(swap)
//         return arr
// }

// const arr=[2,1,-4,3,10,8]
// console.log(bubbleSort(arr))


function bubbleSort(arr){
    if(arr.length==0){
        return "arr is empty"
    }
    let temp;
    let swap
    do{
        swap=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swap=true
            }
        }
    }while(swap)
        return arr
}

const arr=[4,5,3,1,2]
console.log(bubbleSort(arr))