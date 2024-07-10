const Request = require("request");
const Options = require('./Options');


let index = -1;



const DoAction = async () => {
  index = index + 1;
  if (index >= Options.Endpoints.length) {
    index = 0;
  }
  //process.stdout.write('\x1Bc');
  //console.clear();
  
  const _element = Options.Endpoints[index];

  Request(_element, (error, response, body) => {
    if (error) {
      console.error("An error has occurred on ", _element.name, "     ", error);
    } else {
      //console.log("Post successful on : ", _element.name, "   response: ", body);
    }
  });

  const delay = Math.floor(Math.random() * 6)  * 100;
  //console.log(`Next in ${delay} miliseconds`);
  await new Promise((resolve) => setTimeout(resolve, delay));
  DoAction();  // Recursive call for continuous transfers
}

console.log(`Spamming is in progress`);
console.log(`Spamming is in progress`);
console.log(`Spamming is in progress`);
console.log(`Spamming is in progress`);
console.log(`Spamming is in progress`);
console.log(`Spamming is in progress`);
DoAction();