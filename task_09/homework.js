const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);

printArray(arr);
bubbleSort(arr);
printArray(arr);

let index = binarySearch(arr, 5);
console.log(`index: ${index}`);

index = binarySearch(arr, 7);
console.log(`index: ${index}`);
bubbleSort(arr, (a, b) => b - a);
printArray(arr);

function bubbleSort(arr, comparator = (a, b) => a - b) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function binarySearch(arr, value, comparator = (a, b) => a - b) {
    let leftNumber = 0;
    let rightNumber = arr.length - 1;

    while (leftNumber <= rightNumber) {
        const middleNumber = Math.floor((leftNumber + rightNumber) / 2);
        const compareResult = comparator(arr[middleNumber], value);

        if (compareResult === 0) {
            return middleNumber;
        } else if (compareResult < 0) {
            leftNumber = middleNumber + 1;
        } else {
            rightNumber = middleNumber - 1;
        }
    }
    return -1;
}

function printArray(arr) {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}
