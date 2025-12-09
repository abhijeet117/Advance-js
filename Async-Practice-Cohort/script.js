// # Day 60 — Exercises

// ---

// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

/* function afterDelay(time, cb) {
    console.log("Callback executing...")
    setTimeout(function() {
        cb({callback: "Callback executed"});
    },time)
}

afterDelay(1000, function(data) {
    console.log(data.callback)
}); */

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice


/* function getUser(username, cb) {
    console.log("Getting Username...");
    setTimeout(function() {
        cb({id: 221, username: username});
    }, 3000)

}

function getUserposts(userid , cb) {
    console.log("Getting User posts...");
    setTimeout(function() {
        cb(["post 1", "post"]);
    },2000);
}

getUser("@abhijeet",function(user) {
    console.log("Username is", user.username);

    getUserposts(user.id, function(post) {
        console.log(post);
    });
}); */


