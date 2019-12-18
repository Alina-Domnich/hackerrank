'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {

 let positives = 0, negatives = 0, zeros = 0;
     const len = arr.length || 0;
      
     if (len > 0 && len <= 100) {
          arr.map((elem, key) => {
               if (elem > 0) {
                    positives++;
               } else if (elem < 0) {
                    negatives++; 
               } else {
                    zeros++;
               }
                  
               return elem; 
          }); 
     } 
     
     console.log((positives / len) || 0);
     console.log((negatives / len) || 0);
     console.log((zeros / len) || 0);         
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
    }