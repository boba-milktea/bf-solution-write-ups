/**
 * Calculates the sum of all numbers from 1 to the given number.
 *
 * An iterative approach to sum all numbers starting from the input `num`
 * and decrementing until it reaches 1.
 *
 * @param {number} num - the number up to which the sum will be calculted
 * @returns {number} - the sum of all the numbers from 1 to `num`
 */

const addUp = (num) => {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum = sum + i;
    }
    return sum;
};

export default addUp;
