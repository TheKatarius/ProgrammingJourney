console.log("Hello World!");

let points = [
	// An array with 2 elements.
	{ x: 0, y: 0 }, // Each element is an object.
	{ x: 1, y: 1 },
];

points.dist = function () {
	let p1 = this[0];
	let p2 = this[1];
	let a = p2.x - p1.x;
	let b = p2.y - p1.y;
	return Math.sqrt(
		a * a + // The Pythagorean theorem
			b * b
	);
};
console.log(points.dist());
