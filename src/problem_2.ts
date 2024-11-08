{
// Problem 2:

/* create a typescript function removeDuplicates that accepts an array of numbers and returns 
 a new array with duplicates removed. Preserve the original order of the elements.
 sample input: [1, 2, 2, 3, 4, 4, 5]
sample output: 
[1, 2, 3, 4, 5]
 
 */
// solution:
function removeDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const res= removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(res);



// End






}