let n="hello world";
console.log(n);

let a=5;
let x=10;
let y=a+x;
console.log(y);

a="hello";
a="world";
// z=a+a;
// console.log(z);


let c="goodbye";
//  = "hello fellas";
console.log(c);

const z=3.142;
// z=3.1423;
console.log(z);

let f="product";
console.log(f);


const cars = ["BMW","VOLVO","YARIS"]
cars[0] = ("COROLLA")
cars.push("AUDI")
console.log(cars)



// conditional operators
//example 1
let age = prompt("enter your age:");

if (age!==18){
    console.log("you are eligible");
}
else if (age===20){

    console.log("you are not eligible");
}
else{
    console.log("unknown age");
}


// example 2
n = prompt(" enter the number ");
if (n%5 == 0){
    console.log("this number is a multiple of 5 ")
}
else{
    console.log("this number is not a multiple of 5")
}

//example 3

marks = prompt("enter the marks")
if (marks>80 && marks<100){
    console.log("you got A grade")
}
else if(marks>70 && marks<89){
    console.log("you got an B grade")
}
else if(marks>60 && marks<69){
    console.log("you goot an C grade")
}
else if(marks>50 && marks<59){
    console.log("you got an D grade")
}
else{
    console.log("you got an F grade")
}

// loops
//example 1
for (let i=1; i<=5; i++){
    console.log("hello world");

}

// example 2
for (let i=1; i<=10; i++){
      console.log(i);
}

