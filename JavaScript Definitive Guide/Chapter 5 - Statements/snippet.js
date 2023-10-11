const x = 2;
switch (x) {
	case 1:
		console.log("a");
		break;
	case 2:
		console.log("b");
		break;
}

let token = 5;
mainloop: while (token < 10) {
	console.log(token);
	token++;
	if (token === 7) {
		continue mainloop; // Jump to the next iteration of the named loop
	}
}

// Generator function that yields a range of integers
function* range(from, to) {
	for (let i = from; i <= to; i++) {
		yield i;
	}
}

function factorial(x) {
	if (x < 0) throw new Error("x must not be negative");
	let f;
	for (f = 1; x > 1; f *= x, x--); // Calculate factorial
	return f;
}
console.log(factorial(-2)); // Outputs: 24
