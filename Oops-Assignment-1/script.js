// SECTION 1: Objects and OOPS Thinking (Foundation)

// 	1.	Create a user object that stores name and email
//  and has a login method which prints “User logged in”.

/* let obj = {
    name: "abhijeet",
    email: "a@a.com",

    login: function() {
        console.log("Logged in");
    }
}

obj.login(); */


// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe
// how the code becomes cleaner. Write code for both approaches.

/* let user1 = {
    name: "a"
}

let user2 = {
    name: "b"
}
let user3 = {
    name: "c"
}
let user4 = {
    name: "d"
}
let user5 = {
    name: "e"
}

class User {
    constructor (name){
        this.name = name;
    }
}

let User1 = new User("a");
let User2 = new User("b");
let User3 = new User("c");
let User4 = new User("d");
let User5 = new User("e");

console.log(User1.name);
 */

/* When we using class then we have ablity
    to write the code more efficient and also
    we can write in less space an dwe will sav our lines
    and make code modular  
*/

// 	3.	Create a product object that stores name and 
// price and has a method which returns the final price after discount.

/* let product  = {
    name: "sugar",
    price: 48,

    discount: function() {
        return this.price - 5
    }
}

console.log(product.discount()); */

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.
 

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand ,speed also a drive method that prints the car brand and speed.

/*     class car {
        constructor (speed, brand){
            this.speed = speed;
            this.brand = brand;
        }

        drive() {
            return this.brand + " - " + this.speed ;
        }
    }

    let c1 = new car(200, "hundai");
    console.log(c1.drive()); */
    

// 	5.	Create two different car objects from the
//  same class and verify that their data is different.

/* class car {
        constructor (speed, brand){
            this.speed = speed;
            this.brand = brand;
        }

        drive() {
            return this.brand + " - " + this.speed ;
        }
    }

    let c1 = new car(200, "hundai"); //data is diffrent
    let c2 = new car(170, "bullet"); //data is diffrent */

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this
//  logic and what problems might occur when the project becomes large?

/* if class dosen't exit then i will use objects and the code i have to write 
will to long and that code takes much memory also the code is not 
readable. */


// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// Inside the constructor, store both values using this.
// Add a method deposit(amount) that increases the balance.
// Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
// Inside the constructor, store both values using this.


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

console.log(account1.balance); */














