const transpose = function(matrix) {
   // Put your solution here
   let newArray = [];
   
   // for each column (values in nested array at [0]), add an array to newArray
   for (let x = 0; x < matrix[0].length; x++) {
     newArray.push([]);
     // add each element by column into each new array (all 1st elements to array at[0], 2nd elements to array at [1], ...)
     for (let y = 0; y < matrix.length; y++) {
       newArray[x].push(matrix[y][x]);
     }
   }
   return newArray;
 };

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));