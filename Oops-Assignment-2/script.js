// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, 
// price, and a start method that prints “Laptop started”.

// 	2.	Add one more method to the same object that increases
//  the price by 10 percent.

// 	3.	Now imagine you need 10 laptops with same structure
//  but different data.

// Write down (in words or code) what problems 
// you will face if you keep using plain objects.

/* let obj = {
	brand: "hp",
	price: 22000,

	start: function() {
		console.log("Laptop Started");
	},

	increase: function() {
		this.price += (this.price/100) * 10;
		console.log("The increased price is " + this.price);
	}
}

obj.increase(); */


/* function laptop(brand, price) {
	this.brand = brand;
	this.price = price
}

laptop.prototype.start =  function() {
		console.log("Laptop Started");
	}

laptop.prototype.increase = function() {
		this.price += (this.price/100) * 10;
		console.log("The price is increased by 10% and price is - " + this.price);
	}

let newLaptop1 = new laptop("dell", 20000);
newLaptop1.increase(); */


/* if i will keep using plain object the line of codes i 
will write will be 100x or more becouse of this the code 
will not readeable, also the code will laggy and taking more 
ram and for that we will mess up everything. */



// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class 
// and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than 
// writing similar objects again and again?

/* class Employee {
	constructor(name, salary){
		this.name = name;
		this.salary = salary;
	}

	showDetails = function() {
		return this.name + " - " + this.salary
	}
}

let Employee1 = new Employee("harsh", 5000);
let Employee2 = new Employee("raju", 15000);
let Employee3 = new Employee("anurag", 1000);

Employee1.name = "dilo";  // this will not affect any other.

console.log(Employee1.showDetails());
console.log(Employee2.showDetails());
console.log(Employee3.showDetails()); */

/* because it will save our time to write many object 
we simply create a blueprint and it will automatically 
create new objects using this .
classs will save our memory, also makes our code 
readeable , classes make our code modular. */


































