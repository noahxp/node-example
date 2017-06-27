"use strict";

async function b1(n){
  n++;
  console.info("b(2).b1.start,n=",n);

  return new Promise(function(filfill,reject){
    console.info("b(3).b1.filfill,n=",n);
    setTimeout(function(){
      console.info("b(4).a1.setTimeout,n=",n);
      filfill(n);
    },5000);
    // if some thing error.
    // reject('some thing error.');
  });
}


async function b0(n){
  n++;
  console.info("b(1).b0.start,n=",n);

  return await b1(n);  // Promise 物件，因套用 async，可以改用 await 接，取代 then
  // return b1(n)
  // .then(function(data){
  //   console.info("b(5).b0.b1.then,data=",data);
  //   return data;
  // });
}




module.exports = {
  b1:b1
  ,b0:b0
}
