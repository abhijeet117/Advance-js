// 🟢 EASY LEVEL (1–4)


// 1️⃣ Delay function
// wait(2 seconds, callback)
// Aur console me print karna:

// Start
// (2 sec delay)
// End

/* function delay(time, cb) {
    console.log("starting...");
    setTimeout(function() {
        cb();
    }, time)
}

delay(2000, function() {
    console.log("End");  
}) */


// 2️⃣ Fetch user then greet

// Function getUserName(callback) 1 sec ke delay ke baad naam return kare.
// Callback me print karo:

// Hello, <username>

/* function getUserName(time, cb) {
    console.log("printing...")
    setTimeout(function() {
        cb({username: "Abhijeet"})
    },time);
}

getUserName(1000, function(data) {
    console.log("Hello " + data.username)
}); */

// 3️⃣ Random number generator

// generateNumber(callback) 1–100 random number de.
// Callback me check karo ki number odd hai ya even.

/* function generateNumber(cb) {
    let randomNum = Math.floor(Math.random() * 100 ) + 1;
    cb(randomNum);
}

generateNumber(function(data) {
    if(data % 2 === 0) {
        console.log("number is even " + data)
    } else console.log("number is odd " + data)
}); */

// 4️⃣ Perform two tasks sequentially

// Task:

// => Download file (2 sec delay)

// => Process file (1 sec delay)

// Saare steps callback se karo.


/* function downloadFile(cb) {
    console.log("Downloading file ...");
    setTimeout(function() {
        cb()
    },2000); 
}

function processFile(cb) {
    console.log("Processing file ...");
    setTimeout(function() {
        cb();
    },1000);
}


downloadFile(function(){
    processFile(function(){
        console.log("done");
    });
}); */

















