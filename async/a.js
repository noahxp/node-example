"use strict";

async function a1(n){
  n++;
  console.info("a(2).a1.start,n=",n);

  return new Promise(function(filfill,reject){
    console.info("a(3).a1.filfill,n=",n);
    setTimeout(function(){
      console.info("a(4).a1.setTimeout,n=",n);
      filfill(n);
    },5000);
    // if some thing error.
    // reject('some thing error.');
  });
}


async function a0(n){
  n++;
  console.info("a(1).a0.start,n=",n);

  return await a1(n);  // Promise 物件，因套用 async，可以改用 await 接，取代 then
  // return a1(n)
  // .then(function(data){
  //   console.info("a(5).a0.a1.then,data=",data);
  //   return data;
  // });
}

// a0(0);

module.exports = {
  a1:a1
  ,a0:a0
}
