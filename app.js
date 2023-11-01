const { converter } = require("javascript-binary-converter");
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
        const binary = converter(num).toBinary()
        console.log(`${num} = ${binary}`)
        rl.close;
        return;
    }
});
}

askQuestions();