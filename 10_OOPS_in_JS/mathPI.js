// const descripter=Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 4; // Attempt to change the value
// console.log(Math.PI); // 3.141592653589793

const lucky={
    name: "Lucky",
    age: 22,
    isAvailable: true,
}
console.log(lucky);

console.log(Object.getOwnPropertyDescriptor(lucky, 'name'));

// Object.defineProperty(lucky, 'name', {
//     writable: false, // Make it read-only
//     configurable: false, // Prevent further changes to this property
//     enumerable: false, // Still show up in loops
// });
// console.log(Object.getOwnPropertyDescriptor(lucky, 'name'));

for (let [key,value] of Object.entries(lucky)){
    console.log(`${key}:${value}`);
}