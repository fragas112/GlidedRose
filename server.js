const axios = require("axios");

async function makeGetRequest() {
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(doSomeAsyncStuff());
  }

  Promise.all(promises)
    .then(() => {
      for (let i = 0; i < 5; i++) {
        doSomeStuffOnlyWhenTheAsyncStuffIsFinish();
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

makeGetRequest();
