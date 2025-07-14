let res = sumDigits(1234);

console.log(`sum digits = ${res}`);

res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1

console.log(res ? 'Lucky' : "Unlucky"); // Lucky

res = luckyNumber(153871); // 1 + 3 + 7 !== 5 + 8 + 1

console.log(res ? 'Lucky' : `Unlucky`); // Unlucky

function sumDigits(a) {
    return a.toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

function luckyNumber(a) {
//TODO
}
