// // caesar.js

let encrypt = (str, key) => {
  let result = str.toUpperCase().replace(/[a-z]/gi, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
  return result.toLowerCase()
}

module.exports = { encrypt };

// https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/