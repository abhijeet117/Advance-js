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

/* 🟡 MEDIUM LEVEL (5–7) */

// 5️⃣ Nested async operations (mini callback hell)

// Sequence:

// Login user
// Get user data
// Get user notifications
// Show dashboard
// Sab 1–2 seconds delay se callback chaining me karo.

/* function loginUser(cb) {
  console.log("user logged in ..");
  setTimeout(function () {
    cb();
  }, 2000);
}
function userData(cb) {
  console.log("user data ..");
  setTimeout(function () {
    cb({ name: "aka", age: 21 });
  }, 1000);
}
function userNotifications(cb) {
  console.log("User have some notifications!");
  setTimeout(function () {
    cb({
      riya: "Hi, where are you?",
      abhi: "Hey! What's up?",
      neha: "Good morning!",
    });
  }, 3000);
}
function showDashboard(cb) {
  console.log("User dashboard!");
  setTimeout(function () {
    cb({
      username: "abhijeet",
      fullName: "Abhijeet Kumar",
      role: "Student",
      notifications: 3,
      lastLogin: "2025-01-10 11:45AM",
    });
  }, 2000);
}

loginUser(function () {
  userData(function (usa) {
    console.log(usa);
    userNotifications(function (noti) {
      console.log(noti);
      showDashboard(function (dash) {
        console.log(dash);
        console.log("Everything Finished!");
      });
    });
  });
}); */

// 6️⃣ Online food ordering simulation

// Steps with callbacks:

// Choose food
// Prepare food
// Pack food
// Deliver food
// Har step 1 sec delay.

 /* function chooseFood(cb) {
    console.log("choose your food!");
    setTimeout(function() {
      cb();
    },1000);
}

function prepare(cb) {
  console.log("preparing food!")
  setTimeout(() => {
    cb()
  }, 1000);
}

function packFood(cb) {
  console.log("packing food!")
  setTimeout(() => {
    cb()
  }, 1000);
}

function deliverFood(cb) {
  console.log("deliver food!")
  setTimeout(() => {
    cb()
  }, 1000);
}


chooseFood(function(){
    prepare(function() {
      packFood(function() {
        deliverFood(function() {
          console.log("Food deliver sucessfully!")
        });
      });
    });
});
 */

// 7️⃣ Bank ATM flow

// Callback functions:

// insertCard
// verifyPin
// selectOperation
// withdrawCash
// Callback chain bana kar output print karna.

/* function insertCard(cb) {
  console.log("inserting card...");
  setTimeout(function() {
    cb()
  }, 1000);
}

function verifyPin(cb) {
  console.log("verifying pin...");
  setTimeout(function() {
    cb()
  }, 1000);
}
function selectOperations(cb) {
  console.log("select operations");
  setTimeout(function() {
    cb()
  }, 1000);
}
function withdrawCash(cb) {
  console.log("withdrawing cash");
  setTimeout(function() {
    cb()
  }, 1000);
}

insertCard(function() {
  verifyPin(function(){
    selectOperations(function() {
      withdrawCash(function() {
        console.log("Sucessfully withdrawal completed!")
      });
    });
  });
});
 */

// 🔴 HARD LEVEL (8–10)
// 8️⃣ Build a Pyramid of Callbacks

// 3-4 nested levels ke sath callback hell ka “pyramid shape” create karo:

// Start
//  Level 1
//   Level 2
//    Level 3
// End
















































































































