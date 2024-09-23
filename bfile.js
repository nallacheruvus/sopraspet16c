//seeding map with data
let arr1 = [17, 19, 20, 18, 21];
const arr2 = ["Newton", "Einstein", "Raman", "Curie", "Mahalnobis"];
let scMap = new Map();
for (let i = 0; i < arr1.length; i++) {
    scMap.set(arr1[i], arr2[i]);
}
//1 using keys
let itra = scMap.keys();
for (let i = itra.next(); i.done !== true; i = itra.next()) {
    console.log(i.value + " " + scMap.get(i.value));
}
console.log("*".repeat(30));
//2 using key array
let arrb = Array.from(scMap.keys());
let itrb = arrb[Symbol.iterator]();
for (let i = itrb.next(); i.done !== true; i = itrb.next()) {
    console.log(i.value + " " + scMap.get(i.value));
}
console.log("*".repeat(30));
//3 using entries
let itrc = scMap.entries();
for (let i = itrc.next(); i.done !== true; i = itrc.next()) {
    console.log(i.value[0] + " " + i.value[1]);
}
console.log("*".repeat(30));
//4 using entry array
let arrd = Array.from(scMap.entries());
let itrd = arrd[Symbol.iterator]();
for (let i = itrd.next(); i.done !== true; i = itrd.next()) {
    console.log(i.value[0] + " " + i.value[1]);
}
console.log("*".repeat(30));
//5 using array from keys
let itre = Array.from(scMap.keys())[Symbol.iterator]();
for (let i = itre.next(); i.done !== true; i = itre.next()) {
    const aa = i.value;
    console.log(aa + " " + scMap.get(aa));
}
console.log("*".repeat(30));
//6 using array from entries
let itrf = Array.from(scMap.entries())[Symbol.iterator]();
for (let i = itrf.next(); i.done !== true; i = itrf.next()) {
    console.log(i.value[0] + " " + i.value[1]);
}
console.log(scMap);
console.log("*".repeat(30));
//7 using map values iterator
let itrg = scMap.values();
for (let i = itrg.next(); i.done !== true; i = itrg.next()) {
    console.log(i.value);
}
console.log("*".repeat(30));
//8 array from entries with foreach
Array.from(scMap.entries()).forEach(n => {
    console.log(n[0] + " " + n[1]);
});
console.log("*".repeat(30));
//9 array from entries with where clause
const aaa = Array.from(scMap.entries()).map(n => n[1]);
console.log(aaa);
console.log("*".repeat(30));
//10 console table of map
console.table(scMap);
console.log("*".repeat(30));
//11 console table of entry array
console.table(Array.from(scMap.entries()));



