function multiplyWithCallback(arr, callback) {
    const result = arr.map(num => num * 2);
    callback(result);
  }
  
  // Example usage
  multiplyWithCallback([1, 2, 3, 4], (result) => {
    console.log("Doubled Array:", result);
  });
  