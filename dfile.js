function* myGena() {
    yield "First Gen Queue Item";
    yield "Second Gen Queue Item";
    yield "Third Gen Queue Item";
    yield "Fourth Gen Queue Item";
    yield "Fifth Gen Queue Item";
    yield "Sixth Gen Queue Item";
}
let mygena = myGena();
for (let i = mygena.next(); i.done !== true; i = mygena.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
// console.log(mygena.next().value);
// console.log(mygena.next().value);
const arr = [121, 221, 321, 421, 521];
let l = arr.length;
function* arrGena() {
    let i = 0;
    while (i < l) {
        yield arr[i];
        i++;
    }
}

const t = arrGena();
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
// console.log(t.next().value);
for (let i = t.next(); i.done !== true; i = t.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
let arr2 = ["Newton", "Ramanujam", "Raman", "Aryabhatta", "Varahimihira"];
let j = arr2.length;
function* arrGenb() {
    let i = 0;
    while (i < j) {
        yield arr2[i];
        i++;
    }
}
const tt = arrGenb();
for (let i = tt.next(); i.done !== true; i = tt.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
const arr4 = [1, 1, 1, 1, 1, 11, 11, 11, 12, 12, 13, 313, 3, 3, 3, 34, 4, 4, 4, 5, 5, 56, 6, 6, 7, 7];
let seta = new Set(arr4);
function* myGenc() {
    let itr = seta.keys();
    for (let i = itr.next(); i.done !== true; i = itr.next()) {
        yield i.value;
    }
}
console.log("*".repeat(30));
let ttt = myGenc();
for (let i = ttt.next(); i.done !== true; i = ttt.next()) {
    console.log(i.value);
}
function* myGend() {
    let itr = seta.entries();
    for (let i = itr.next(); i.done !== true; i = itr.next()) {
        yield `${i.value[0]}`;
    }
}
console.log("*".repeat(30));
let tttt = myGend();
for (let i = tttt.next(); i.done !== true; i = tttt.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
const arrdd = Array.from(seta.keys());
let len = arrdd.length;
function* myGene() {
    let i = 0;
    while (i < len) {
        yield arrdd[i];
        i++;
    }
}
let ta = myGene();
for (let i = ta.next(); i.done !== true; i = ta.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
let arra = [1, 2, 3, 4, 5];
let arrb = ["Physics", "Nuclear Physics", "Geo Physics", "Mathematical Physics", "Nano Physics"];
let map = new Map();
for (let i = 0; i < arra.length; i++) {
    map.set(arra[i], arrb[i]);
}
function* mapgen() {
    let itr = map.entries();
    for (let i = itr.next(); i.done !== true; i = itr.next()) {
        yield i.value[0] + " " + i.value[1]
    }
}
const mgen = mapgen();
for (let j = mgen.next(); j.done !== true; j = mgen.next()) {
    console.log(j.value);
}
