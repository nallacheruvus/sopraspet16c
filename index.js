const arra = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let itra = arra[Symbol.iterator]();
for (let i = itra.next(); i.done !== true; i = itra.next()) {
    console.log(i.value);
}
const arrb = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
let itrb = arrb[Symbol.iterator]();
for (let i = itrb.next(); i.done !== true; i = itrb.next()) {
    //console.log(i.value);
    let itrbb = i.value[Symbol.iterator]();
    for (let j = itrbb.next(); j.done !== true; j = itrbb.next()) {
        console.log(j.value);
    }
}
const arrc = ["Newton", "Einstein", "Raman", "Curie", "Pauli"];
let itrc = arrc[Symbol.iterator]();
for (let i = itrc.next(); i.done !== true; i = itrc.next()) {
    console.log(i.value);
}
const arrd = [["P", "Physics"], ["C", "Chemistry"], ["M", "Mathematics"], ["G", "Geology"], ["A", "Archaeology"]];
let itrd = arrd[Symbol.iterator]();
for (let i = itrd.next(); i.done !== true; i = itrd.next()) {
    let irtdd = i.value[Symbol.iterator]();
    for (let j = irtdd.next(); j.done !== true; j = irtdd.next()) {
        console.log(j.value);
        console.log("*".repeat(80));
    }
}
const arre = [true, false, true, false, true, false, true, false, true, false];
let itre = arre[Symbol.iterator]();
for (let i = itre.next(); i.done !== true; i = itre.next()) {
    // console.log(i.value);
    i.value ? console.log("Its true") : console.log("Its false");
}
console.log("*".repeat(50));
function Person(name, email) {
    this.name = name;
    this.email = email;
}
let pArr = [];
const arrf = ["Newton@gmail.com", "Einstein@gmail.com", "Raman@gmail.com", "Curie@gmail.com", "Pauli@gmail.com"];
for (let i = 0; i < arrf.length; i++) {
    let per = new Person(arrc[i], arrf[i]);
    pArr.push(per);
}
let perIter = pArr[Symbol.iterator]();
for (let i = perIter.next(); i.done !== true; i = perIter.next()) {
    const obj = i.value;
    for (const k in obj) {
        console.log(k.toUpperCase() + ":" + obj[k]);
    }
}



