const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5; // Randomly decide to resolve or reject

  if (success) {
      resolve("Promise resolved!"); // Resolve the promise
  } else {
      reject("Promise rejected!"); // Reject the promise
  }
});


myPromise
    .then(message => console.log(message))   // Handle resolved promise
    .catch(error => console.error(error));   // Handle rejected promise
