function repeated(arr) {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      hashMap[arr[i]] += 1;
    } else {
      hashMap[arr[i]] = 1;
    }
  }
  console.log(hashMap);
  let i = -1;
  for (let [key,value] of hashMap) {
    console.log(key);
    console.log(value);
    
  }
  return i
}

const array = [3, 2, 3, 4, 2, 3, 4, 3];

console.log(repeated(array));
