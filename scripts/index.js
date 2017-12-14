// const hoursInDay = 24;
// let GOTcharacter;
// GOTcharacter = {
//     Name: "Jaime Lannister",
//     House: "Lannister",
//     Childcount: 3
// };
// console.log(GOTcharacter);
// console.log(hoursInDay);

// console.log(typeof hoursInDay);
// console.log(typeof GOTcharacter);

let GOTHouse;

if (typeof GOTHouse === undefined) {
    console.log("warning!! that variable is 'undefined'")
}
else {
    console.log("success")
}


const UndefinedCheck = (valueToCheck) => {
    if (valueToCheck != undefined) { return 'false' }
    else { return 'true' }
}

function addStrings(string1, string2){
    return string1 + string2;
}

var fullString = addStrings("I am ", "A full string!"){
  return : addStrings,
}




// Using the arrow syntax, create a function called UndefinedCheck that does the following:
// Takes one parameter called valueToCheck
// If the valueToCheck parameter is undefined return false otherwise return true
// Use the not operator (!) in your if expression
// Refactor the if statement from Exercise 6 to use the UndefinedCheck function and the turnary operator to determine what
// to write to the console window
