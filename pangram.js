/* 
    Design a function that determines whether a given string is a pangram. A
    pangram is a sentence or phrase containing every letter of the alphabet at
    least once. Punctuation and case are typically ignored. For example, the
    string "The quick brown fox jumps over the lazy dog" is a pangram, while
    "Hello, world!" is not.
*/

const pangram = ((inputString) => {
    const lowerCaseString = inputString.toLowerCase();

    let alphabetSet = new Set();

    for(let char of lowerCaseString) {
        if(/[a-z]/.test(char)) {
            alphabetSet.add(char);
        }
    }

    return alphabetSet.size === 26
});

console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("Hello World"));
