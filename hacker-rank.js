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

// Compare the Triplets
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let score = [0, 0]
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            score[0] += 1
        } else if (a[i] < b[i]) {
            score[1] += 1
        }
    }
    return score;
}

// A Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(array) {
    let sum = 0;
    for (let i = 0; i < array[0].length; i++) {
        sum = sum + (array[i][i] - array[i][array[0].length - i - 1])
    }
    return Math.abs(sum)
}