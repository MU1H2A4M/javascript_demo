//functions
// example 1
function add(num1,num2){
    return num1+num2;
}

function sub(a,b){
    return a-b;
}

function mul(x,y){
    return x*y;
}

console.log(mul(4,6),add(3,7),sub(10,4));


// example 2
function countVowels(message){
    let count =0;
    let vowels = "aeiou";
    for(let char of message){
        if(vowels.includes(char))
        count++;
    }
    return count;
}

console.log(countVowels("umberalla is colorfull"));


//arch function
// example 3
d=[2,3,4,5,6,7,8,9,10]
d.forEach((element) => {
    square=element*element;
    console.log(square);
})


//array method
//example 4
num =[2,3,4,5,6,7,8,9,10]
let g=num.map((val)=>{
    return val*2;
})

console.log(g);

//example 5
num=[2,3,4,5,6,7,8,9,10]
let f=num.map((val)=>{
    return val%2==0;
}
)
console.log(f);


//example 6
arr=[12,23,34,45,56,67,78,89,90]
let o=arr.filter((val)=>{
    return val%3==0;
})
console.log(o);
