## ECMAScript -
 It is a scripting language specification on which JavaScript is based. It serves as the guideline or the 'rules' for scripting language design.

## JavaScript -
 It is a scripting language that conforms to the ECMA Script Specification. It's the most widely known and used implementation of ECMAScript.
 Beyond ECMAScript - JavaScript includes additonal features that are not part of the ECMAScript specification, like the DOM (Document Object Model) manipulation , which is crucial for web development but is not defined by ECMAScript.

## Common JS Engine

 V8 used by Google chrome/chromium is a JS Browser Engine, writtten in C
 Similarly SpiderMonkey used by firefox written in C  and Rust

 ## Node.js is a runtime

 Some smart people took out the V8 engine Added some backend things(filesystem reads) on top to create a new runtime to compete with BE languages like Java.

 JS was never meant to be run in the backend. Eventually became vary popular and is a popular choice of runtime on the backend.

## Bun

Other than the fact that JS is a single threaded, Node.js is slow (muliple reasons for it) Some smart people said they wanted to re-write the JS runtime for the backend and introduced Bun. 

It is significantly faster than runtime.

It is written in Zig.

## HTTP Server -  Hyper Text Transfer Protocol
1. A Protocol that is defined for machines to communicate.
2. Specifically for websites, it is the most common way for our website's frontend to talk to its backend. 

## HTTP Client Side
1. Protocol (HTTP/HTTPS)
2. Address (URL/IP/PORT)
3. Route
4. Headers Body Query Params
5. Method

## HTTP Server Side
1. Response Headers
2. Response Body
3. Status Code


