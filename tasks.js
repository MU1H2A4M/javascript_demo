
//microtask vs macrotask
console.log("Program is ready");

setTimeout(() => {
    console.log("SetTimeout will run");
}, 0);


Promise.resolve().then(() => {
    console.log("first task ");
}).then(() => {
    console.log("second task");
});

console.log("Program is end");