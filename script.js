// object:

let object = {
    name : "sathya",
    age : 47,
    phone : 6388926746,
    city : "Madurai"
}
console.log(object);

// output
// { name: 'sathya', age: 47, phone: 6388926746, city: 'Madurai' }

// Accessing object properties:
// .method

let form = {
   register: 2477898,
   city : "madurai",
   address: "jthiurnagaf madurda",
}
console.log(form.city);

// output
// madurai

// [""]method:
let sen = {
    register: 2477898,
    city : "madurai",
    address: "jthiurnagaf madurda",
}
console.log(sen["address"]);

// output
// jthiurnagaf madurda

// Adding and updating properties:
 
let add = {
    name:  "Gopi",
    age: 24,
    city: "Madurai"
}
add.job ="Developer"
console.log(add);

// output
// { name : 'Gopi', age : 24, city : 'Madurai', job : 'Developer' }

let up = {
    name: "sowmi",
    age:22,
    city:"Madurai"
}
up.age = 21
console.log(up);

// output
// { name: 'sowmi', age: 21, city: 'Madurai' }

// Deleting Object Properties:

let dele = {
    name:"Surya Devi",
    age: 26,
    email: "Devi345@gmail.com"
}
delete dele.email;
console.log(dele);

// output
// { name: 'Surya Devi', age: 26 }

// Commonly used object methods 
// (1. Object.keys , 2, Object.values , 3, Object.entries)

 let lap = {
    Brand : "lenova",
    Model : "XPS.15",
    Year : 2020
 };
 console.log(Object.keys(lap));
//  output
//  [ 'Brand', 'Model', 'Year' ]

console.log(Object.values(lap));
// output
// [ 'lenova', 'XPS.15', 2020 ]

console.log(Object.entries(lap));
// output
// [ [ 'Brand', 'lenova' ], [ 'Model', 'XPS.15' ], [ 'Year', 2020 ] ]

// Nested Object

let com = {
    Name : "Techno",
    Location : "mumbai",
    Employee : {
        name : "sara",
        position : "Developer"
    }
};
console.log(com.Employee.position);

// Output
// Developer