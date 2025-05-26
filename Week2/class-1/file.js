function onDone(){
    console.log("hi there");
}

readFile("a.txt")
console.log("Hi, from console");

setTimeout(onDone, 1000);
console.log("after set timeout");

function readFile(content){
    console.log(content);
}