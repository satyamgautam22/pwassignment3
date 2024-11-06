function racePromises(promises) {
    return Promise.race(promises);
  }
  
  // Example usage
  const promise1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));
  
  racePromises([promise1, promise2]).then(result => console.log("Winner:", result));
  