{

/*Problem 3:
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1

// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;


*/




// solution of problem 3:
function countWordOccurrences(sentence: string, word: string): number { 
    let count = 0; 
    sentence = sentence.toLowerCase(); 
    word = word.toLowerCase(); 
    for (let i = 0; i < sentence.length; i++) { 
        if (sentence.indexOf(word, i) !== -1) { 
            count++; 
            i = sentence.indexOf(word, i); 
        } 
    } 
    return count; 
}

// Sample Input:
const result = countWordOccurrences("I love typescript", "typescript");

console.log(result);

























// 

}