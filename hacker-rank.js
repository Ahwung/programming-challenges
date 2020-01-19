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
// https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen

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

let first = [1,5,3];
let second = [4,1,6]; 
console.log(compareTriplets(first, second))