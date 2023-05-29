// Ejercicio 1
interface Person {
    name: string,
    age: number,
    profession: string
};

let leerPerson = (pers: Person): string[] => [pers.name, Number(pers.age).toString(), pers.profession];

let newperson: Person = {
    name: "Igor",
    age: 25,
    profession: "Frontend developer"
};
console.log("["+ leerPerson(newperson).toString() +"]");

// Ejercicio 2
function sumOrConcatenate(v1, v2: number | string): number | string {
    if (typeof v1 === "number" && typeof v2 === "number") return v1+v2;
    else if (typeof v1 === "string" && typeof v2 === "string") return v1.concat("-").concat(v2);
    else return (typeof v1 === "string" ? v1.concat(":").concat(Number(v2).toString()) : Number(v1).toString().concat(":").concat(String(v2)));
};

console.log(sumOrConcatenate(4,3));
console.log(sumOrConcatenate(4,"hello"));
console.log(sumOrConcatenate("hello","world"));

// Ejercicio 3
interface Car {
    tires: number,
    turnOnEngine: () => void,
    pressPedal: () => void
};

interface Motorcycle {
    tires: number,
    turnOnEngine: () => void,
    openThrottle: () => void
};

function isCar(mach: Car | Motorcycle): mach is Car {
    return (mach as Car).pressPedal !== undefined;
};

function startMachine(mach: Car | Motorcycle) {
    mach.turnOnEngine();
    isCar(mach) ? mach.pressPedal() : mach.openThrottle(); 
};

let carObj: Car = {
    tires: 4,
    turnOnEngine: function () {console.log("Turning car on");},
    pressPedal: function () {console.log("Pressing pedal");}
}

let motorcycleObj: Motorcycle = {
    tires: 3,
    turnOnEngine: function () {console.log("Turning motorcycle on");},
    openThrottle: function () {console.log("Opening the throttle");}
}

startMachine(carObj);
startMachine(motorcycleObj);

// Ejercicio 4
function removeFirstEntry(arr: Array<string | number>): Array<string | number> {
    arr.shift();
    return arr;
};

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail

console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];