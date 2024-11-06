function sumAsync(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 1000);
  }
  
  
  sumAsync(14, 11, (result) => {
    console.log("Sum:", result);
  });
  