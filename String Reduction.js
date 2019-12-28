'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the stringReduction function below.
function stringReduction(str) {
while (str.match(/(ab|ba|bc|cb|ac|ca)/) != undefined) {
    str = str.replace(/ab|ba/, "c").replace(/(bc|cb)/, "a").replace(/(ac|ca)/, "b");
  }
  console.log(str);
  return str.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = stringReduction(s);

        ws.write(result + "\n");
    }

    ws.end();
}