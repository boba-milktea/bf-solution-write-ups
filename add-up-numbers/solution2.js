/**
 * Calculates the sum of all numbers from 1 to the given number.
 *
 * `Array.from()` to generate an array from 0 to `num`,
 * and then uses `reduce()` to calculate the sum of all the numbers.
 *
 * @param {number} num - the number up to which the sum will be calculted
 * @returns {number} - the sum of all the numbers from 1 to `num`
 */

const addUp = (num) => {
    const arr = Array.from({ length: num + 1 }, (_, i) => i);
    return arr.reduce((acc, current) => acc + current);
};

export default addUp;
