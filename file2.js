//arrays
//example # 1
cars = ["BMW","VOLVO","YARIS"]
console.log(cars[2]);
cars.push("AUDI");
console.log(cars);

//example # 2
marks = [45,67,89,90,23,56,78,88,92,100]
for(let i=0;i<10;i++){

    console.log(marks[i]); 

}

//example # 3
fruits = ["mango","banana","orange","grapes","apple"]
vegetables = ["carrot","broccoli","spinach","potato","cabbage"]
let result = fruits.concat(vegetables)
console.log(result);

//example # 4
let f = fruits.slice(1,4)
console.log(f);
    
//example # 5
fruits.sort()
console.log(fruits);