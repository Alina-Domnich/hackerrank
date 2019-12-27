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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
 var res;

    var pos = s.substring(-2, 8);

    var split = pos.split(':');

    if (split[0] == 12 && s.endsWith('AM')) {
        res = '00' + ':' + split[1] + ':' + split[2];

    } else if (split[0] == 12 && s.endsWith('PM')) {
        res = '12' + ':' + split[1] + ':' + split[2];

    } else if (split[0] < 12 && s.endsWith('AM')) {
        res = split[0] + ':' + split[1] + ':' + split[2];

    } else if (split[0] < 12 && s.endsWith('PM')) {
        var add = Number(split[0]) + 12;
        res = add + ':' + split[1] + ':' + split[2];
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}