let point = {
	x: 1,
	y: 2,
	toString: function () {
		return `(${this.x}, ${this.y})`;
	},
	toJSON: function () {
		return this.toString();
	},
};
console.log(JSON.stringify([point])); // => '["(1, 2)"]'

const PROPERTY_NAME = "p1";
function computePropertyName() {
	return "p" + 2;
}
let p = {
	[PROPERTY_NAME]: 1,
	[computePropertyName()]: 2,
};
console.log(p); // { p1: 1, p2: 2 }
