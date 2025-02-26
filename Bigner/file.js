const fs = require("fs")


// fs.writeFileSync("./test.txt", 'Hey There!')

// fs.writeFile("./test.txt", 'Hey There3!',(err)=>{}); 
// const read = fs.readFileSync("./test.txt","utf-8");


// const read =fs.readFileSync("./nodeJs.txt", "utf-8");
// console.log(read);

// const result =  fs.readFile("./nodeJs.txt", "utf-8", (err, result)=> {
//     if(err){
//         console.log("error")
//     }else{
//         console.log(result)
//     }
// })


// fs.appendFileSync("./test.txt", `${Date.now()}`);
// const read =fs.readFileSync("./test.txt", "utf-8");
// console.log(read);


// fs.copyFileSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./nodeJs.txt"));


// fs.mkdirSync("myDir");

fs.mkdirSync("myDir/a/b", {recursive: true});