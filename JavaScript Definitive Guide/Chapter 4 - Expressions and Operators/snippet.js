// console.log(a);

// let sparseArray = [1, , , , 5]; // Contains three undefined elements
// console.log(sparseArray[2]);

// let obj = { x: 2, y: 3 };
// console.log(obj[z]);

let a = parseInt("0xA");
console.log(a);

String.raw`\n`.length;
let n = 15;
console.log(n.toString(2));

let b = 11424.0413;
console.log(b.toFixed(1));

console.log(Number.parseInt("a8.94abc"));

console.log(typeof new String("abc"));

console.log(new String("abc") instanceof String);

const obj = {
	x: 2,
};
console.log(new String(obj));

// let x = "local";
// eval('var x = "global";');
// console.log(x);

const geval = eval;
let x = "global";
const g = () => {
	let x = "local";
	eval("x += 'eval'");
	return x;
};
console.log(g());
geval('x += "eval2"');
console.log(x);
