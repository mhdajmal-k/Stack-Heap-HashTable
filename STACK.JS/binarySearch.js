function binarySearch(arr,target){
    if(arr.length==0){
        return 
    }
    let left=0
    let right=arr.length-1
    console.log(right);
    while(left<=right){
        let middileIndex=Math.floor((left+right)/2)
        if(arr[middileIndex]==target){
            return middileIndex
        }
        if(target>arr[middileIndex]){
            left=middileIndex+1
        }else{
            right=middileIndex-1
        }
        
    }
    return "not found"
}
const arr=[1,2,3,4,5,6,7,8]
const target=8
console.log(binarySearch(arr,target))