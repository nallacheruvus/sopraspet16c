let arr1 = [77, 99, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 89, 8];
let seta = new Set(arr1);
let ia = seta.keys();
for (let i = ia.next(); i.done !== true; i = ia.next()) {
    console.log(i.value);
}
console.log("*".repeat(20));
let ib = seta.values();
for (let i = ib.next(); i.done !== true; i = ib.next()) {
    console.log(i.value);
}
console.log("*".repeat(20));
let ic = seta.entries();
for (let i = ic.next(); i.done !== true; i = ic.next()) {
    console.log(i.value[0]);
}
console.log("*".repeat(20));
const aa = Array.from(seta.keys());
let id = aa[Symbol.iterator]();
for (let i = id.next(); i.done !== true; i = id.next()) {
    console.log(i.value);
}
console.log("*".repeat(20));