const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

// const json = JSON.stringify(names);
// localStorage.setItem(LS_KEY, json);

const value = localStorage.getItem(LS_KEY);
console.log(value);

const data = JSON.parse(value);
console.log(data[2]);
