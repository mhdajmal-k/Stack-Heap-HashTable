function findMaxOccurrence(nums) {
    // Create a hash table to store the count of occurrences of each number
    const countMap = {};

    // Iterate through the array to count occurrences of each number
    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

let maxNum = nums[0];
    let maxOccurrence = countMap[nums[0]];


    // Iterate through the hash table to find the number with maximum occurrence
    for (let num in countMap) {
        if (countMap[num] > maxOccurrence) {
            maxNum = num;
            maxOccurrence = countMap[num];
        }
    }

    return parseInt(maxNum); // Convert the result to integer (if needed)
}

// Test case
const nums = [1, 2, 3, 4, 5, 2, 2, 3, 3, 3];
console.log(findMaxOccurrence(nums)); // Output: 3
