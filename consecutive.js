/*
    Design a function that takes a list of integers as input. The function should
    return True if the list contains two consecutive threes (3 next to a 3) anywhere
    within the list. Otherwise, it should return False. For example, the function
    should return True for [1, 3, 3] and False for [1, 3, 1, 3].
 */

    const consecutive = (array) => {
        for (let index = 0; index < array.length - 1; index++) {
            if (array[index] == 3 && array[index + 1] == 3) {
                return true;
            }
        }
        return false;
    };

    let numbers = [1, 2, 3, 3];
    console.log(consecutive(numbers));

    numbers = [1, 3, 1, 3];
    console.log(consecutive(numbers));

