
// menggunakan asynchronous operation
// function formatName(name){
//     const result = name.toUpperCase();
//     return result;
// }


// function getName(name, callFormatName){
//     const result = callFormatName(name);
//     console.log(result);
// }

// menggunakan arrow function
const formatName = (name) => name.toUpperCase();

const getName = (name, callFormatName) => console.log(callFormatName(name));

getName("Ahmad Fadjar", formatName);