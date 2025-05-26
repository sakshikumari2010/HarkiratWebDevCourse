/*
What are promises?
1) Just syntactical sugar
2) Just a more readable way to write async functions

Can you write JS without them
Yes- Just use callbacks

*/

// Approach 1 - This appraoch uses a callback.WE have created a function where other people can send a callback,this is good , but could lead to callback hell. Callback lead to unnecessary identation this is called callback hell.

function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("Hi there");
}, 1000)

// Approach 2 - Using Promises

function myOwnSetTimeoutPromise(duration){
    let p = new Promise(function (resolve){
        // after 1 second , call resolve
        setTimeout(resolve, 1000);
    });
    return p;
}

myOwnSetTimeoutPromise(1000).then(function(){
    console.log("Log the first thing");
});