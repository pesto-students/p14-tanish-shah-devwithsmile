let evenArray = [];
let oddArray = [];
let mainArray = [1, 2, 3, 4, 5, 6];

function divideArray(array) {
    array.forEach(element => {
        if (element % 2 == 0) {
            evenArray.push(element);
        } else {
            oddArray.push(element);
        }
    });
}

divideArray(mainArray);

console.log("Even numbers: " + evenArray);
console.log("Odd numbers: " + oddArray);
