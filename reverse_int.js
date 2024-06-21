/*
	Design a function that reverses the digits of an integer. For example, 50
	should become 5 and -12 should become -21.
*/

function reverseInt(number) {
    let negative = number < 0;

    if (negative) {
        number = -number;
    }

    let reversedStr = String(number).split('').reverse().join('');

    let reversedInt = parseInt(reversedStr, 10);

    if (negative) {
        reversedInt = -reversedInt;
    }

    return reversedInt;
}

// Negative number
console.log(reverseInt(-12));
// Positive number
console.log(reverseInt(12));
