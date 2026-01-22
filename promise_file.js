//promise
//example 1
let orderBook = new Promise((resolve, reject) => {
    let availabel = true;

    if (availabel) {
        resolve("book is available"); 
    } 
    
    else {
        reject("not available"); 
    }
});


orderBook
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error); 
    });

//example 2
let checkorder=new Promise((resolve,reject)=>{

      let orderready=true;
      
      if(orderready){
        resolve("order is ready");
      }
      else{
        reject("order is not ready");
      }
});

checkorder
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

//example 3
let fetchdata=new Promise((resolve,reject)=>{
    if(dataavilabel=true){
        resolve(message="data is fetched");
    }
        else {
            reject("data is not fetched");
        }

    }
)

fetchdata
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})


// async and await
function bookbind() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("book is ready");
        }, 3000);
    });
}

async function orderProcess() {
    console.log("book is binding");

    let result = await bookbind(); 

    console.log(result);
    console.log("Customer got the book");
}


orderProcess();
console.log("Main counter saaf kar raha hoon..."); 



//callback function
function greet(name,callback){
    console.log("hello"+name);
    callback();

}

function callme(name){
    console.log("i am here");

}
greet("Ali",callme);

