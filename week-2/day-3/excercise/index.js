var arr = [0, 1, 2, 3];
console.log(`before: ${arr}`);
arr.unshift(-1)
arr.push(4);
arr.pop();
arr.push(4);
arr.shift();
console.log(`after: ${arr}`);

var nama = [1, 15, 2];
console.log(`before: ${nama}`);
nama.sort((value1, value2) => value1 > value2);
console.log(`after: ${nama}`);

var tech = ["tablet", "laptop", "komputer"];
tech.splice(1,2, "televisi");
console.log(tech)