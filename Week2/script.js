const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");
let a =0;

for(let i =0; i<1000000000; i++){
    a++;
}

console.log("hi there 2");
console.log(a);