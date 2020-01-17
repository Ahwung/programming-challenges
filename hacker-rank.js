// =============================
// Algorithms
// =============================

// Simple Array Sum
// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

