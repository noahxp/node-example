"use strict";

var a = require("./a")
var b = require("./b")


function dd(n){
  return new Promise(function(filfill,reject){
    // b.b0 如果沒自帶參數，用上一層 then 帶下來的，則可依順序執行
    a.a0(n).then(b.b0(9)).then(function(data){
      console.log("multi.then=" + data);
      filfill(data); // 因為 dd 是 promise , 所以要用 filfill 傳回
    }).catch(function(err){
      console.error("err=",err);
    });
  })
}


var ret = dd(0).then(function (data){
  console.log("***** result then data=",data);
});
console.log("***** result=",ret);
