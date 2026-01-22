const person = {
    firstname: "John",
    
    lastname: "Doe",
     
    age: 50,
    
    eyecolor: "blue"        
};
console.log(person.firstname);

const car={
    name: "mira",
    type: "efi",
    model:2023,
    color:"white",
    company:"daihatsu"

};
console.log(car.model,car.company);


const id={
    firstname:"ALI",
    lastname:"KHAN",
    age:20,
    city:"karachi",

    fullname:function(){
        return this.firstname + " " + this.lastname;
    }
};

console.log(id.fullname());