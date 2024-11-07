{

// Problem 1:


// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;
// Solution of problem 1:
function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result);

// End




}