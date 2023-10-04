let string = "Ala ma kota";
console.log(string);
string = "Ala ma kota1";
console.log(string);

const tempFunc = (a) => {
	a += 2;
	console.log(a);
	return a;
};
let variable = 5;
tempFunc(variable);
console.log(variable);

let bits = 0b0001_1101_0111;
console.log(bits);

console.log(2.0 / 0);
console.log(2 ** 550 * 2 ** 550);

console.log(Number.MIN_VALUE);

let string1 = "1" + "0".repeat(100); // 1 followed by 100 zeros.
console.log(BigInt(string1)); // => 10n**100n: one googol

console.log("\n".length);
console.log(String.raw`${bits} \n`.length);

let a = "56";
a = new Number(a);
console.log(typeof a);

console.log(parseInt("010"));

const func = (a, b) => {
	return a + b;
};
let obj = {};
let arr = [2, 3];
console.log(String(func));

const date = Date.now();
console.log(date.toString());

console.log(abc);
var abc = 5;

const { cos: cosine, tan: tangent } = Math;
console.log(Math.cos(Math.PI));
console.log(cosine(Math.PI));

console.log(Math.ceil(0.4));

console.log("Hello\rWorld");

console.log(parseFloat("true"));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
