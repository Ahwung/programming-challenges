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

// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(array) {
    let zero = 0;
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero = zero + 1
        } else if (array[i] < 0) {
            negative++
        } else if (array[i] > 0) {
            positive = positive + 1
        }
    }
    console.log((positive/array.length).toFixed(6))
    console.log((negative/array.length).toFixed(6))
    console.log((zero/array.length).toFixed(6))
}


// Staircase
// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let stair = ' '.repeat(n - i - 1) + '#'.repeat(i + 1);
        console.log(stair)
    }
}