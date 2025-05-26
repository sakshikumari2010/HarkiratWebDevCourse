// SetTimeout and fs.readFile are asyn functions

const fs = require("fs")
let a = 1;
console.log(a);

fs.readFile("sample.txt", "utf-8", (err,data) =>{ // async call
    console.log("data read from the file is - ");
    console.log(data);
})

let ans = 0;
for(let i =0; i< 100; i++){
    ans = ans + i;
}

console.log(ans);