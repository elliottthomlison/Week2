// EXAMPLE DATA BELOW
const data = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = function(data, person, field) {  
  let fieldCheck = Object.keys(data[0]);
  // console.log(fieldCheck)
  let result = {};
  if (!fieldCheck.includes(field)) {
    return "Not found";
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === person) { //finding the name of the person who is listed as the 2nd parameter in the function
      result.name = data[i].friends[0]; //should add name: "Costello" to result'
    }
  } 
  for (let j = 0; j < data.length; j++) {
    if (data[j].name === result.name) {
      result[field] = data[j][field];
    } 
  }
  if (Object.keys(result).length === 0) {
    return "Not found";
  }
  return result; 
};

console.log(findFriend(data, "Abbott", "phone"))
console.log(findFriend(data, "Buster", "email"))
console.log(findFriend(data, "Bob", "phone"))
console.log(findFriend(data, "Costello", "birthday"))