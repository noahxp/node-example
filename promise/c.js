"use strict";

var a = require("./a")
var b = require("./b")

function cc(n){
  // b.b0 如果沒自帶參數，用上一層 then 帶下來的，則可依順序執行
  a.a0(n).then(b.b0(9)).then(function(data){
    console.log("multi.then=" + data);
    return data;
  }).catch(function(err){
    console.error("err=",err);
  });
}

var ret = cc(0);
console.log("***** result=",ret); // 預期會是 undefined ， cc 裡呼叫的都是非同步，且 cc 不是 Promise，所以無法確保最後執行
// 如果 b.b0(9) ，把 9 的參數拿掉，即可確保先執行完 a 後再執行 b ，不然無法確保
