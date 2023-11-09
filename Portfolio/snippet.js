// Write a function that receives two sequences: A and B of integers and returns one sequence C.
function eratosthenes(maxNumber) {
	const numbers = new Array(maxNumber + 1).fill(true);
	const result = [];
	for (let i = 2; i <= maxNumber; i++) {
		if (numbers[i]) {
			result.push(i);
			for (let j = i * i; j <= maxNumber; j += i) {
				numbers[j] = false;
			}
		}
	}
	return result;
}

function countDuplicates(arr) {
	const result = new Map();
	for (let val of arr) {
		if (!result.has(val)) {
			result.set(val, 1);
		} else {
			let currVal = result.get(val);
			result.set(val, ++currVal);
		}
	}
	return result;
}

function findPrimeValuesInMap(map, primeNumbersSet) {
	const result = [];
	for (const [key, val] of map.entries()) {
		if (primeNumbersSet.has(val)) {
			result.push(key);
		}
	}
	return result;
}

function removeValues(valuesToRemove, arr) {
	return arr.filter((val) => !valuesToRemove.has(val));
}

A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

// Converting to set bcs finding values in set is O(1), not O(n) like in arrays
const primeNumbersSet = new Set(eratosthenes(Math.max(...B)));
const countedDuplicates = countDuplicates(B);
const valuesToRemove = new Set(
	findPrimeValuesInMap(countedDuplicates, primeNumbersSet)
);
const C = removeValues(valuesToRemove, A);
console.log(C);
