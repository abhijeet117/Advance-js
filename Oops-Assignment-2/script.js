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


// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.


/* class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(val) {
        return this.balance += val;
    }
}

let account1 = new BankAccount("Abhijeet", 100000000000000);
let account2 = new BankAccount("Raju", 100000000000000);

account1.deposit(69);

console.log(account1.balance);  */

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property 
// 	username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

/* let profile = {
	username: "abhi",

	printName: function() {
		console.log(this.username)
	},
}

profile.printName(); // working perfectly */

/* let abc = profile.printName; // storing the function in variable
console.log(abc) // we get the entire function
abc() // we get undefined because the value of this is now lost 

let abcd = profile.printName.bind(profile);
abcd(); // i am using bind to storing in variable so the value of this will not lost. */


// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle
//  that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe
//  memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.


/* class Vehicle {
	constructor(type, wheel) {
		this.type = type;
		this.wheel = wheel;
		// function describe(){} Every intances will get new method
	}

	describe(){
		
	} // added in prototype
}

Vehicle.prototype.call = function() {
	console.log(this.type + " " + this.wheel);
}

let p1 = new Vehicle("ob1", "ob2");
let p2 = new Vehicle("ob3", "ob4");

console.log(p1); // when we open prototype of p1 we get our call method. */

/* Explanation: When we create a method inside constructor every time 
   we create new intance of class using new vehicle a new method will 
   will create and it will take much memory 
   
   but when we use method outside the constructor it will goes in shared
   memory and we never create same method again and again so the better 
   approch is creating methods outside constuctor or in prototype.  */
























