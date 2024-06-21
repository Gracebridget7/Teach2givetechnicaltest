/* 
    Write a recursive function to calculate the factorial of a number
 */

function recursive(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * recursive(number - 1);
    }
}


console.log(recursive(6));
