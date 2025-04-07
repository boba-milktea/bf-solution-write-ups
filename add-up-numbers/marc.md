# [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

Marc's solution uses recursion. It's the same idea as \_sir's solution summing
all the integers from 1 to num. Marc's method works by repeatedly calling the
function on progressively subtract the value of `num` until it reaches 1, and
then adds the numbers up.

## Implementation

**Base case/condition**: Set the condition. The base code is - if the `num`
equals to 1, it returns 1.

**Recursive call**: if the `num` is greater than 1, it keeps calling
function`addup(num-1) ` and add the current `num` to the result.

**Strict comparison operator**: using `===` to set up the base code. To determin
if `num` is equal to number 1.

**arithmetic operator**: using operactors `+` and `-` to calculate the solution.

## Possible Refactors

This strategy could also be implemented using these (but not only these)
Implementation ...

- use a `if...else` statement
- use the ternary operator
- use an arrow function

## References

- recursive function:
  [What is Recursion in JavaScript?](https://www.freecodecamp.org/news/recursion-in-javascript/),
  [JavaScript Recursion](https://www.programiz.com/javascript/recursion)
