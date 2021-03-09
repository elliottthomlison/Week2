const transpose = function(matrix) {
  
  let array = [];

  if (matrix.length === 1) { // [[...]]
    for (const row of matrix) {
      for (const el of row) {
        console.log(array)
        let newArray = []; 
        newArray.push(el); 
        array.push(newArray); // [1, 2, 3] => [[1], [2], [3]]
      }
    }
  } else {  // [[], [], []]
     
    for (const row of matrix) { 
      array.push([]);  // [[], [], [], []]
    }
    
    for (let i = 0; i < matrix.length; i++) {
      console.log(array);
      for (let j = 0; j < matrix[i].length; j++) {
        array[j].push(matrix[i][j]); // [1 ,2 , 3 ,4] (i) => [[1], [2], [3], [4]] 
      }
    }
  }
  return array; 
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