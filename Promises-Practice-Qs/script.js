// 1. Simulate a food delivery thet returns a Promise,
//    it should resolve after 2 sec with "pizza delivered"
//    also add a chance to reject with delivery failed .

/* function foodDelivery() {
  let chance = Math.random() < 0.5;
  return new Promise(function (res, rej) {
    setTimeout(() => {
      if (chance) res();
      else rej();
    }, 2000);
  });
}

foodDelivery()
  .then(function () {
    console.log("Food delivered!");
  })
  .catch(function () {
    console.log("Delivery failed!");
  }); */

// 2. chained promises: user -- posts -- comments
// a. create getUser() - resolves with {id: 1 , name "abhij"}
// b. getPost(userId) - resolves with list of poast titles
// c. getComments(postId) - resolves with comments
// chain them together using .then() and log the final output

/* function getUser() {
  console.log("getting user info...");
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res({ id: 1, name: "abhij" });
    }, 2000);
  });
}

function getPost() {
  console.log("getting user posts...");
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res(["a nice day", "glowing up", "wether is fine"]);
    }, 1000);
  });
}

function getComments() {
  console.log("getting user comments...");
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res(["wowo!", "hii", "angel priya!"]);
    }, 1500);
  });
}

getUser()
  .then(function (data) {
    console.log(data);
    return getPost(data.id);
  })
  .then(function (titles) {
    console.log(titles);
    return getComments("kuch comment");
  })
  .then(function (cmts) {
    console.log(cmts);
  })
  .finally(function () {
    console.log("All Conditions are now fullfilled!");
  }); */




