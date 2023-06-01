function getRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        resolve(randomNumber);
      }, 2500);
    });
  }
  getRandomNumber().then((randomNumber) => {
    console.log(randomNumber);
  });