// function selectionSort(arr){
//     if (arr.length==0) {
//         return "lsit is empty"
//     }
//     for (let i = 0; i < arr.length; i++) {
//       let min=i
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i]>arr[j]){
//                 min=j
//             }
            
//         }
//         let temp=arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
//     }
//     return arr
// }


function selectionSort(arr){
    if(arr.length==0){
        return
    }
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for (let j = i+1; j < arr.length; j++) {
       if(arr[i]>arr[j]){
        min=j
       }
            
        }
        if (min!=i) {
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    return arr
}



const arr=[-2,3,1,3,6,4]
console.log(selectionSort(arr))