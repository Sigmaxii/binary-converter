const { BinaryConverter } = require("javascript-binary-converter");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function askQuestions() {
  rl.question("give me a nummber to convert: ", (num) => {
    if (num === 'stop') {
      console.log("stopped");
      return;
    } else {
        const binary = new BinaryConverter(num).toInteger();
        console.log(`${num} = ${binary}`)
        return;
    }
});
}

askQuestions();