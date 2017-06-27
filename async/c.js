/**
async 需搭配 Promise 物件使用，
後續使用該函式的語法，只需下 await 即可變成 sync 程式(非同步變同步)
使用 await 的地方，該 method 需用 async 定義，不然無法使用 await
*/
"use strict";

var a = require("./a")
var b = require("./b")

async function cc(n){
  n = await a.a0(n);
  n = await b.b0(n);
  console.log("multi await=",n);

  return await n;

  // a.a0(n).then(b.b0).then(function(data){ // Promise 物件，因套用 async，可以改用 await 接，取代 then，但 catch 還是要包，不然會一路吐到最上層，並且可能會中斷應用程式
  //   console.log("multi.then=" + data);
  //   return data;
  // }).catch(function(err){
  //   console.error("err=",err);
  // });
}

// var ret = cc(0);
// console.log("***** result=",ret); // 預期會是 undefined ， 雖 cc 宣告成 async ，但 這裡呼叫 cc 的並沒有 await ，故有機會優先執行
                                  // 如果改用最下面這段 code ，則可得到 cc 執行後的執，因為 await

async function cc_result(){
  var ret = await cc(0);
  console.log("***** result=",ret); // 因 cc 也 await 了，所以可得到最後的值
}
cc_result();
