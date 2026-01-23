//example
class book{
    constructor(name,author){
        this.name=name;
        this.author=author;
    }


}

const book1=new book("clean code","robert c martin");
console.log(book1);


//example 2
class car{
    constructor(brand,company,model){
        this.brand=brand;
        this.company=company;
        this.model=model;
    }
        
    }

    const car1=new car("civic","honda",2022);
    const car2=new car("corolla","toyota",2023);
    
    console.log(car1);
    console.log(car2);

//example 3
class Dog{
  constructor(name) {
    this.name = name;
  }

  get dogName() {
    return this.name;
  }
  set dogName(newName) {
    this.name = newName;
  }


  bark() {
    console.log('{this.name} says woof!');
  }
}


let myDog = new Dog('Rayne');
console.log(myDog.name); 

myDog.dogName = 'Buddy'; 
console.log(myDog.name); 

myDog.bark(); 



//example 4
class user{
    constructor(username,age,email){
        this.username=username;
        this.age=age;
        this.email=email;
    }
set age(new_age){
    if(new_age<18){
        console.log("age is less than 18");
    }
    else{
        console.log("age is valid");
    }
}
}
let user_1=new  user("Ali",20,"ali@example.com");
console.log(user_1);
user_1.update;

let user_2=new  user("Aisha",16,"aisha@example.com");
console.log(user_2);