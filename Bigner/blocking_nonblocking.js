const fs =require("fs");

console.log("                   ");

// blocking process
console.log("Blocking Process...");
console.log("                   ");
console.log(1);

const read =fs.readFileSync("./test.txt", "utf-8");
console.log(read);

console.log(2);
console.log(3);
console.log(4); 

console.log("                 ");

console.log("Non-Blocking Process...");
console.log("                 ");
console.log(1);

// nonblocking process
const result =  fs.readFile("./test.txt", "utf-8", (err, result)=> {
        console.log(result)
});

console.log(2);
console.log(3);
console.log(4); 




// // MAX Thread Size for Thread Pool
// const os =require("os");
// console.log(os.cpus().length)