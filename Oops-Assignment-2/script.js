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




































