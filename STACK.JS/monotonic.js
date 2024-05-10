function monotonic(arr) {
    let stack = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            stack.pop();
        }
        stack.push(arr[i]);
    }
    for (let i = 0; i < stack.length; i++) {
        result.push(stack[i]);
    }
    return result;
}

const arr = [3, 1, 4, 5, 9, 2];
console.log(monotonic(arr));
