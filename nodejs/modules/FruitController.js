// import data fruits 
const fruits = require("./data.js");

// membuat fungsi index
const index = () => {
    for (const fruits of fruits) {
        console.log(fruits);
    }
};

// membuat fungsi store
const store = (name) => {
    fruits.push(name);
    index();
};

index();

// module exports
