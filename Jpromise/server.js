const { log } = require("console");
var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.end('Hello World\n');
}).listen(8081);
///////////////////////=============================================================== //////////////////

function Banker(name) { console.log("1.Broker : " + name); }
name = "Leon Marvin";
x = Banker(name);

function reverse(str) {
   let reversed = "";
   for (var i = str.length - 1; i >= 0; i--) { reversed += str[i]; }
   return reversed;
}
console.log(reverse("ZAMBIA-AIBMAZ .2"));
//////////////////////////////////////////////////////////////////////////////////
 var promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
       resolve('3. hello world');
   }, 2000);
});

promise.then(function(data) {
   console.log(data + ' 1');
});

promise.then(function(data) {
   console.log(data + ' 2');
});

promise.then(function(data) {
   console.log(data + ' 3');
});
//////////////////////////////////////////////////////////////////////////////////
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
   resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("4. asynchronous logging has val:",val) );
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
//////////////////////////////////////////////////////////////////////////////////
var promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
       reject('5. We are all going to die');
   }, 2000);
});

promise.then(function success(data) {
   console.log(data + ' 1');
}, function error(data) {
   console.error(data + ' 1');
});

promise.then(function success(data) {
   console.log(data + ' 2');
}, function error(data) {
   console.error(data + ' 2');
});

promise.then(function success(data) {
   console.log(data + ' 3');
}, function error(data) {
   console.error(data + ' 3');
});

///////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  // begin
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started (Sync code started)');
  // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
  let p1 = new Promise((resolve, reject) => {
    // The executor function is called with the ability to resolve or reject the promise
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise started (Async code started)');
    // This is only an example to create asynchronism
    window.setTimeout(function() {
        // We fulfill the promise !
        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  // We define what to do when the promise is resolved with the then() call,
  // and what to do when the promise is rejected with the catch() call
  p1.then(function(val) {
    // Log the fulfillment value
    log.insertAdjacentHTML('beforeend', val + ') Promise fulfilled (Async code terminated)');
  }).catch((reason) => {
    // Log the rejection reason
    console.log(`Handle rejected promise (${reason}) here.`);
  });
  // end
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made (Sync code terminated)');
}
//////////////////////////////////////////////////////////////////////////////////////////////////
let promise1 = new Promise(function(resolve, reject) {
   setTimeout(() => resolve({msg: '6. To do some more job'}), 1000);
});

promise1.then(function(result) {
   return {data: 'some data'};
});

promise1.then(function(result) {
   return {data: 'some other data'};
});

promise1.then(function(result) {
   return {data: 'some more data'};
});
///////////////////////////////////////////////////////////////////////////////
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

///////////////////////=============================================================== //////////////////
console.log('Server running at http://127.0.0.1:8081/');