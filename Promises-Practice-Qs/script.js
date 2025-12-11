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
