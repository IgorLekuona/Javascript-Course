;
var leerPerson = function (pers) { return [pers.name, Number(pers.age).toString(), pers.profession]; };
var newperson = {
    name: "Igor",
    age: 25,
    profession: "Frontend developer"
};
console.log("[" + leerPerson(newperson).toString() + "]");
// Ejercicio 2
function sumOrConcatenate(v1, v2) {
    if (typeof v1 === "number" && typeof v2 === "number")
        return v1 + v2;
    else if (typeof v1 === "string" && typeof v2 === "string")
        return v1.concat("-").concat(v2);
    else
        return (typeof v1 === "string" ? v1.concat(":").concat(Number(v2).toString()) : Number(v1).toString().concat(":").concat(String(v2)));
}
;
console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));
;
;
function isCar(mach) {
    return mach.pressPedal !== undefined;
}
;
function startMachine(mach) {
    mach.turnOnEngine();
    isCar(mach) ? mach.pressPedal() : mach.openThrottle();
}
;
var carObj = {
    tires: 4,
    turnOnEngine: function () { console.log("Turning car on"); },
    pressPedal: function () { console.log("Pressing pedal"); }
};
var motorcycleObj = {
    tires: 3,
    turnOnEngine: function () { console.log("Turning motorcycle on"); },
    openThrottle: function () { console.log("Opening the throttle"); }
};
startMachine(carObj);
startMachine(motorcycleObj);
// Ejercicio 4
function removeFirstEntry(arr) {
    arr.shift();
    return arr;
}
;
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
